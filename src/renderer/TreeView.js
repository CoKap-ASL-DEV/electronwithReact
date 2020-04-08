import { Tree } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: "parent 0",
    key: "0-0",
    children: [
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-1",
        key: "0-0-1",
        isLeaf: true,
      },
    ],
  },
  {
    title: "parent 1",
    key: "0-1",
    children: [
      {
        title: "leaf 1-0",
        key: "0-1-0",
        isLeaf: true,
      },
      {
        title: "leaf 1-1",
        key: "0-1-1",
        isLeaf: true,
      },
    ],
  },
];
class TreeView extends Component {
  onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };
  render() {
    return (
      <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={this.onSelect}
        onExpand={this.onExpand}
        treeData={treeData}
      />
    );
  }
}

export default TreeView;
