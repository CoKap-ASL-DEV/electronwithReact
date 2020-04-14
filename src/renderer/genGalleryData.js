let dataPaths = [];

const treeTraversal = (node) => {
  if (node.isLeaf) {
    dataPaths.push(node.path);
  } else {
    node.children.map((cNode) => {
      treeTraversal(cNode);
    });
  }
};
const genGalleryData = (node) => {
  treeTraversal(node);
  console.log("ddddddddddddddddddd");
  console.log(dataPaths);

  return Array.from(new Set(dataPaths));
};
//dataPaths = null;

export default genGalleryData;
// const obj = {
//   isLeaf: false,
//   children: [
//     { isLeaf: true, children: [], path: "000" },{ isLeaf: true, children: [{ isLeaf: true, children: [], path: "111_1" },{ isLeaf: true, children: [], path: "111_2" },], path: "111" },{ isLeaf: true, children: [], path: "222" },
//   ],
// };
// treeTraversal(obj);
// console.log(dataPaths);
