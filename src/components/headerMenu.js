import React from "react";
import { Button, Col, Row, Space } from "antd";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div>
      <Row>
        <Col lg={{ span: 6, offset: 2 }} />
        <Col lg={{ span: 6, offset: 2 }}>
          <Space>
            <Link to="/global">
              <Button danger>Global Statistics</Button>
            </Link>
            <Link to="/countries">
              <Button danger>Country Level Statistics</Button>
            </Link>
            <Link to="/about">
              <Button danger>About App</Button>
            </Link>
          </Space>
        </Col>
        <Col lg={{ span: 6, offset: 2 }} />
      </Row>
    </div>
  );
};

export default HeaderMenu;
