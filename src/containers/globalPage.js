import { Card, Col, Divider, Layout, PageHeader, Row } from "antd";

import React, { useEffect } from "react";
import * as statisticsActions from "../redux/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NumberFormat from "react-number-format";

const { Content } = Layout;

const GlobalPage = (props) => {
  useEffect(() => {
    props.actions.getGlobalCoronaVirusStatistics();
  }, []);

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
        <PageHeader title="Global Corona Virus Statistics" />
        <Divider />
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card title="CASES" bordered={false}>
              <NumberFormat
                value={props.globalStatistics?.cases}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card title="DEATHS" bordered={false}>
              <NumberFormat
                value={props.globalStatistics?.deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card title="RECOVERED" bordered={false}>
              <NumberFormat
                value={props.globalStatistics?.recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    globalStatistics: state.statistics.globalStatistics,
    loading: state.statistics.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getGlobalCoronaVirusStatistics: bindActionCreators(
        statisticsActions.getGlobalCoronaVirusStatistics,
        dispatch
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalPage);
