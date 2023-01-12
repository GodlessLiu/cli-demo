const myAction = require("./action.js");

const myCommander = function (program) {
  program
    .command("init <project>")
    .alias("i")
    .description("初始化")
    .action(myAction.init);
};

module.exports = myCommander;
