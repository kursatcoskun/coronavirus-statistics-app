import { Layout } from "antd";

import React from "react";
import Routes from "../components/routes";
import HeaderMenu from "../components/headerMenu";

const { Content } = Layout;

const LayoutContent = (props) => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      {props.loading ? "LOADING" : ""}
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          height: "100vh",
        }}
      >
          <HeaderMenu/>
        <Routes />
      </Content>
    </Layout>
  );
};

export default LayoutContent;
