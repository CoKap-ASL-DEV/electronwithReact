import { Tree } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
//const { ipcRenderer } = window.require("electron");
const { DirectoryTree } = Tree;
const { ipcRenderer } = window.require("electron");

// const treeData = [
//   {
//     title: "parent 0",
//     key: "0-0",
//     children: [
//       {
//         title: "leaf 0-0",
//         key: "0-0-0",
//         isLeaf: true,
//         icon: <FormOutlined />,
//       },
//       {
//         title: "leaf 0-1",
//         key: "0-0-1",
//         isLeaf: true,
//       },
//     ],
//   },
//   {
//     title: "parent 1",
//     key: "0-1",
//     children: [
//       {
//         title: "leaf 1-0",
//         key: "0-1-0",
//         isLeaf: true, //directory 일경우 false로 file일 경우 true로 설정
//       },
//       {
//         title: "leaf 1-1",
//         key: "0-1-1",
//         isLeaf: true,
//       },
//     ],
//   },
// ];
class TreeView extends Component {
  state = {
    dTreeData: null,
  };
  onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };
  componentDidMount() {
    console.log("g34ggggg");
  }

  render() {
    console.log(this.props.dtree);
    return (
      <div>
        {console.log(!!this.props.dtree)}
        {!!this.props.dtree ? (
          <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={this.onSelect}
            onExpand={this.onExpand}
            treeData={this.props.dtree}
          />
        ) : (
          <h1>Test</h1>
        )}
      </div>
    );
  }
}

export default TreeView;
