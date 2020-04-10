const getTreeData = require("./directoryTree.js");

const directoryTreeData = (path) => {
  //let directoryTreeData = getTreeData("C:/GPT");
  let data = getTreeData(path);
  console.log(directoryTreeData);
  return data;
};

module.exports = directoryTreeData;
