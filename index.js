const createCsvWriter = require("csv-writer").createObjectCsvWriter;
async function loadInquirer() {
  return import("inquirer");
}

// data variable must contain an array of objects
// For example,
// const data = [
//   {
//     source: '/index',
//     destination: '/',
//     permanent: true,
//   },
//  ];

const data = [];

// Prompt user for which fields to include in the CSV
async function promptForFields() {
  const inquirer = await loadInquirer();
  const sampleObject = data[0];
  const fields = Object.keys(sampleObject);
  const response = await inquirer.default.prompt([
    {
      type: "checkbox",
      name: "fields",
      message: "Which fields would you like to include in the CSV?",
      choices: fields,
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose at least one field.";
        }
        return true;
      },
    },
  ]);
  return response.fields;
}

// Prompt user for filename
async function promptForFilename() {
  const inquirer = await loadInquirer();
  const response = await inquirer.default.prompt([
    {
      type: "input",
      name: "filename",
      message: "Enter the output CSV file name (including path):",
      default: "output.csv", // Providing a default file name
      validate: function (value) {
        if (value.length < 1) {
          return "Please enter a valid file name.";
        }
        return true;
      },
    },
  ]);
  return response.filename;
}

// Write data to CSV
async function writeToCsv(fields, filename) {
  const csvWriter = createCsvWriter({
    path: filename,
    header: fields.map((field) => ({ id: field, title: field.toUpperCase() })),
  });

  const records = data.map((item) => {
    let record = {};
    fields.forEach((field) => (record[field] = item[field]));
    return record;
  });

  await csvWriter.writeRecords(records);
  console.log(`The CSV file was written successfully to ${filename}`);
}

// Run the prompts and then create the CSV
async function main() {
  const fields = await promptForFields();
  const filename = await promptForFilename();
  await writeToCsv(fields, filename);
}

main();
