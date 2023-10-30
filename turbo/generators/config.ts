// @ts-ignore
import { PlopTypes } from "@turbo/gen";
import searchList from "inquirer-search-list";
// @ts-ignore
import path from "path";
// @ts-ignore
import fs from "fs";
const currentDirectory = process.cwd();
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setPrompt("search-list", searchList);

  plop.setGenerator("generate-app", {
    // description: 'Copy a directory to a specified location',
    prompts: [
      {
        type: "search-list",
        message: "Select your template:",
        name: "sourceDirectory",
        choices: () => {
          // Read subdirectories within the 'react-apps' directory and use them as choices
          const reactAppDir = path.join(__dirname, "..", "..", "react-apps");
          return fs.readdirSync(reactAppDir).filter((file) => {
            return fs.statSync(path.join(reactAppDir, file)).isDirectory();
          });
        },
      },

      {
        type: "input",
        name: "destinationDirectory",
        message: "Enter the name of your app:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: path.join(currentDirectory, "{{destinationDirectory}}"),
        base: path.join(
          __dirname,
          "..",
          "..",
          "react-apps",
          "{{sourceDirectory}}"
        ),
        templateFiles: path.join(
          __dirname,
          "..",
          "..",
          "react-apps",
          "{{sourceDirectory}}/**/*"
        ),
      },
    ],
  });
  //   plop.setGenerator('example', {
  //     description:
  //       'An example Turborepo generator - creates a new file at the root of the project',
  //     prompts: [
  //       {
  //         type: 'input',
  //         name: 'file',
  //         message: 'What is the name of the new file to create?',
  //         validate: (input: string) => {
  //           if (input.includes('.')) {
  //             return 'file name cannot include an extension';
  //           }
  //           if (input.includes(' ')) {
  //             return 'file name cannot include spaces';
  //           }
  //           if (!input) {
  //             return 'file name is required';
  //           }
  //           return true;
  //         },
  //       },
  //       {
  //         type: 'list',
  //         name: 'type',
  //         message: 'What type of file should be created?',
  //         choices: ['.md', '.txt'],
  //       },
  //       {
  //         type: 'input',
  //         name: 'title',
  //         message: 'What should be the title of the new file?',
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: 'add',
  //         path: '{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}',
  //         templateFile: 'templates/turborepo-generators.hbs',
  //       },
  //     ],
  //   });
}
