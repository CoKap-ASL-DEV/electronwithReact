let dataPaths = [];

// const treeTraversal = (node) => {
//   if (node.isLeaf) {
//     dataPaths.push(node.path);
//   } else {
//     node.children.map((cNode) => {
//       treeTraversal(cNode);
//     });
//   }
// };
const treeTraversal = (node, keys) => {
  if (node.isLeaf) {
    const found = keys.find((element) => element === node.key);
    if (!(typeof found === "undefined")) {
      dataPaths.push(node.path);
    }
  } else {
    node.children.map((cNode) => {
      treeTraversal(cNode, keys);
    });
  }
};
const genGalleryData = (node, keys) => {
  treeTraversal(node, keys);

  console.log(dataPaths);
  const imgPaths = dataPaths;

  return Array.from(new Set(imgPaths));
};

export default genGalleryData;
// const obj = {
//   isLeaf: false,
//   children: [
//     { isLeaf: true, children: [], path: "000" },{ isLeaf: true, children: [{ isLeaf: true, children: [], path: "111_1" },{ isLeaf: true, children: [], path: "111_2" },], path: "111" },{ isLeaf: true, children: [], path: "222" },
//   ],
// };
// treeTraversal(obj);
// console.log(dataPaths);
