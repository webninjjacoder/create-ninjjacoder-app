const { exec } = require("child_process");

// Define the command you want to run
const commandToRun = "turbo-gen-run"; // Replace with the actual command and options

// Execute the command
exec(commandToRun, (error, stdout, stderr) => {
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
