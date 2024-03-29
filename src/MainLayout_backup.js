import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./MainLayout.css";
import Gallery from "./renderer/Gallery";
import TreeView from "./renderer/TreeView";
import AddtoWorkSpaceBtn from "./renderer/Button";
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
      <Layout style={{ minHeight: "100vh", minWidth: "100vh" }}>
        <Sider
          theme="dark"
          width={370}
          // collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{}}
        >
          <div className="logo">K E P C O</div>
          <TreeView dtree={this.props.dtree} />
          {/* <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <FileOutlined />
            </Menu.Item>
          </Menu> */}
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
        <Layout className="site-layout" style={{}}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 500 }}
            >
              <h1 id="hello">{this.props.message}</h1>
              <button
                onClick={() => {
                  ipcRenderer.send("Hmessage", "start");
                }}
              >
                Click
              </button>
              <Gallery />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Data Science Lab. ©2020 Created by DTMASTER
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
