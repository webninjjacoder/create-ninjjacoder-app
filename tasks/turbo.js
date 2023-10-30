#!/usr/bin/env node

const { execSync } = require("child_process");

const commandToRun = "turbo gen run";

// Execute the command
execSync(commandToRun, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
