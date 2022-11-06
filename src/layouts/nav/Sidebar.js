import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import pages from "../../routes";
import "./sidebar.css";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">Home</Link>, "1", <FileOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem(<Link to="/register">Register</Link>, "2"),
    getItem(<Link to="/login">Login</Link>, "3"),
  ]),
];
function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Routes>
          {pages.map(page => (
            <Route
              path={page.path}
              element={
                <Content
                  style={{
                    margin: "0 16px",
                  }}
                >
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {page.menu.map(menu => (
                      <Breadcrumb.Item>{menu}</Breadcrumb.Item>
                    ))}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    {page.element}
                  </div>
                </Content>
              }
            />
          ))}
        </Routes>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          React-Practice-App
        </Footer>
      </Layout>
    </Layout>
  );
}
export default Sidebar;
