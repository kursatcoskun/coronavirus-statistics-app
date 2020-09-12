import { Divider, PageHeader, Table } from "antd";

import React, { useEffect } from "react";
import * as statisticsActions from "../redux/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CountryListPage = (props) => {
  useEffect(() => {
    props.actions.getCountryListCoronaVirusStatistics();
  }, [props.actions]);

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      sorter: (a, b) => a.country.length - b.country.length,
      sortDirections: ["descend"],
    },
    {
      title: "Cases",
      dataIndex: "cases",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.cases - b.cases,
    },
    {
      title: "Today Cases",
      dataIndex: "todayCases",
      sorter: (a, b) => a.todayCases.length - b.todayCases.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      sorter: (a, b) => a.deaths.length - b.deaths.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Today Deaths",
      dataIndex: "todayDeaths",
      sorter: (a, b) => a.todayDeaths.length - b.todayDeaths.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Total Tests",
      dataIndex: "totalTests",
      sorter: (a, b) => a.totalTests.length - b.totalTests.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  return (
    <div>
      <PageHeader title="Country Level Corona Virus Statistics" />
      <Divider />
      <Table columns={columns} dataSource={props.countryListStatistics} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryListStatistics: state.statistics.countryListStatistics,
    loading: state.statistics.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCountryListCoronaVirusStatistics: bindActionCreators(
        statisticsActions.getCountryListCoronaVirusStatistics,
        dispatch
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryListPage);
