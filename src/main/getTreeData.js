const getTreeData = require("./directoryTree.js");

let directoryTreeData = getTreeData("C:/GPT");
console.log(directoryTreeData);

module.exports = directoryTreeData;
