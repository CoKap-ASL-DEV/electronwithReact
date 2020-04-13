import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./MainLayout.css";
import Gallery from "./renderer/Gallery";
import TreeView from "./renderer/TreeView";
import AddtoWorkSpaceBtn from "./renderer/addtoWorkspaceBtn";
import RemoveBtn from "./renderer/removeBtn";
import ExecBtn from "./renderer/ExecutionBtn";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { ipcRenderer } = window.require("electron");

//mainWindow.webContents.send("GetTreeData", directoryTreeData);
class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {}

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          minWidth: "100vh",
        }}
      >
        <Sider
          theme="dark"
          width={370}
          // collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{}}
        >
          <div className="logo">
            <h1 style={{ fontSize: "16px" }} className="logo">
              KEPCO Image Augmentation Program
            </h1>
          </div>
          <TreeView dtree={this.props.dtree} />

          <div
            style={{
              padding: "0px",
              width: "100%",
              height: "5%",
              position: "absolute",
              bottom: "0px",
              //left: "50%",
              //marginLeft: "-50px",
            }}
          >
            <AddtoWorkSpaceBtn />
            {/* <button style={{ width: "100px" }}>Convert</button> */}
          </div>
        </Sider>

        <Layout className="site-layout" style={{ overflow: "hidden" }}>
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>FilePath</Breadcrumb.Item>
              <Breadcrumb.Item>Name</Breadcrumb.Item>
            </Breadcrumb>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 480 }}
            >
              <div>
                <Gallery />
              </div>
              <div style={{ margin: "-60px 0px 0px 1400px" }}>
                <RemoveBtn />
              </div>
            </div>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 20 }}
            >
              <ExecBtn />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            KEPCO Data Science Lab. ©2020 Created by UT LEE (a.k.a, DTMASTER)
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
