import { Tree } from "antd";
import React, { Component } from "react";
import genGalleryData from "./genGalleryData";
//import "antd/dist/antd.css";
import "./naviStyle.css";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
//const { ipcRenderer } = window.require("electron");
const { DirectoryTree } = Tree;
const { ipcRenderer } = window.require("electron");

class TreeView extends Component {
  state = {
    dTreeData: null,
    checkedKeys: null,
  };

  onSelect = (keys, event) => {
    console.log("------------------");
    console.log("Trigger Select", keys, event);
    console.log("------------------");
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };

  onCheck = (checkedKeys) => {
    console.log("onCheck", checkedKeys);
    this.setState({ checkedKeys: checkedKeys });
    const paths = genGalleryData(this.props.dtree[0], checkedKeys);
    console.log(paths);
    const imgPaths = paths.map((path) => {
      return { original: path, thumbnail: path };
    });
    console.log(imgPaths);
    this.props.selectedHandler(imgPaths);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        {!!this.props.dtree ? (
          <DirectoryTree
            style={{
              background: "#001529",
              color: "#ffffff",
              hover: {
                background: "#111111",
              },
            }}
            checkable
            multiple
            defaultExpandAll
            onCheck={this.onCheck}
            checkedKeys={this.state.checkedKeys}
            onSelect={this.onSelect}
            onExpand={this.onExpand}
            treeData={this.props.dtree}
          />
        ) : (
          <h3 style={{ color: "white", paddingLeft: "15px" }}>
            Select the folder
          </h3>
        )}
      </div>
    );
  }
}

export default TreeView;

//selected 파란색
// .ant-tree.ant-tree-directory .ant-tree-treenode-selected:hover::before, .ant-tree.ant-tree-directory .ant-tree-treenode-selected::before {
//   background: #1890ff;
// }

//hover 하얀색
// .ant-tree.ant-tree-directory .ant-tree-treenode:hover::before {
//   background: #f5f5f5;
// }
