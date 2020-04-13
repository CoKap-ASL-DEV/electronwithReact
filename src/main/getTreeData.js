const getTreeData = require("./directoryTree.js");

const directoryTreeData = (path) => {
  //let directoryTreeData = getTreeData("C:/GPT");
  let data = getTreeData(path, {
    extensions: /\.(bmp|jpg|jpeg|jpe|gif|tif|tiff|png)$/,
  });
  console.log(directoryTreeData);
  return data;
};

module.exports = directoryTreeData;
