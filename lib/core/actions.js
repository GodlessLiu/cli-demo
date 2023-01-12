const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const path = require("path");
const dirName = process.cwd();
const fs = require("fs");
const LOG = console.log;
const myAction = function () {
  return {
    init(project) {
      LOG(chalk.bgGreen("THIS IS A INIT DEMO"), project);
    },
  };
};

module.exports = myAction();
