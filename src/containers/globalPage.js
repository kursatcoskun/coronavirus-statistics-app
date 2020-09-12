import { Col, Divider, PageHeader, Row } from "antd";

import React, { useEffect } from "react";
import * as statisticsActions from "../redux/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlobalCard from "../components/globalCard";

const GlobalPage = (props) => {
  useEffect(() => {
    props.actions.getGlobalCoronaVirusStatistics();
  }, [props.actions]);

  return (
    <div>
      <PageHeader title="Global Corona Virus Statistics" />
      <Divider />
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <GlobalCard
            title="CASES"
            statisticsValue={props.globalStatistics?.cases}
          />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <GlobalCard
            title="DEATHS"
            statisticsValue={props.globalStatistics?.deaths}
          />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <GlobalCard
            title="RECOVERED"
            statisticsValue={props.globalStatistics?.recovered}
          />
        </Col>
      </Row>
    </div>
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
