#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const readline = require("readline");
// const inquirer = require("inquirer");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function takeInput(query) {
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

const createApp = async () => {
  const params = process.argv.slice(2);

  const currentDirectory = process.cwd();

  const rootDir = path.join(__dirname, "..");
  const packagesDir = path.join(rootDir, "react-apps");

  const packages = [];
  const packagePathsByName = {};

  fs.readdirSync(packagesDir).forEach((name) => {
    packages.push(name);

    const packageDir = path.join(packagesDir, name);
    const packageJson = path.join(packageDir, "package.json");
    if (fs.existsSync(packageJson)) {
      packagePathsByName[name] = packageDir;
    }
  });

  const appName =
    params[0] ??
    (await takeInput("What should we name the app (e.g. my-app)? "));

  const appPath = path.join(currentDirectory, appName);

  if (fs.existsSync(appPath)) {
    console.log();
    console.error(
      `The directory ${appName} already exists. Please choose a different name or delete this folder.`
    );
    process.exit(1);
  }

  const paramsTemplate = (params[1] || "").replace("--template=", "");

  let templateName = packages.includes(paramsTemplate) ? paramsTemplate : "";

  if (templateName == "") {
    // const selectedTemplate = await inquirer.prompt([
    //   {
    //     type: "list",
    //     name: "template",
    //     message: "Which template should we use (e.g. react-cra)?",
    //     choices: packages,
    //   },
    // ]);

    templateName = "react-cra";
  }

  const templatePath = path.join(__dirname, "..", "react-apps", templateName);

  console.info(`Creating a new React MSK app in ${appPath}.`);

  fs.mkdirSync(appPath);

  const templateFiles = fs.readdirSync(templatePath, { recursive: true });

  templateFiles.forEach((file) => {
    let stats = fs.statSync(path.join(templatePath, file));

    if (stats.isDirectory()) {
      const folder = file.split("/").pop();
      const appFolderPath = path.join(appPath, folder);

      const templateFolderPath = path.join(templatePath, folder);

      fs.mkdirSync(path.join(appPath, folder), {
        recursive: true,
        mode: 0o777,
      });

      const templateFiles = fs.readdirSync(path.join(templatePath, file));
      templateFiles.forEach((file) => {
        let stats = fs.statSync(path.join(templateFolderPath, file));

        if (stats.isDirectory()) {
        } else {
          fs.copyFileSync(
            path.join(templateFolderPath, file),
            path.join(appFolderPath, file)
          );
        }
      });
    } else if (file === "package.json") {
      const json = JSON.parse(
        fs.readFileSync(path.join(templatePath, file), "utf8")
      );
      json.name = appName;
      fs.writeFileSync(path.join(appPath, file), JSON.stringify(json, null, 2));
    } else {
      fs.copyFileSync(path.join(templatePath, file), path.join(appPath, file));
    }
  });

  // console.info("Installing packages. This might take a couple of minutes.");

  // const o = cp.execSync(`cd ${appName} && npm install`, { encoding: "utf-8" });

  console.log("Done! 🚀");
  console.log();
  console.log("We suggest that you begin by typing:");
  console.log();
  console.log(`cd ${appName}`);
  console.log(`npm install`);
  console.log(`npm run dev`);
  console.log();

  process.exit();
};
createApp();
