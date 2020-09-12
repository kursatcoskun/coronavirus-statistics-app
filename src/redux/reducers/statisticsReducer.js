import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function StatisticsReducer(
  state = initialState.statistics,
  action
) {
  switch (action.type) {
    case types.GET_GLOBAL_STATISTICS:
      return {
        ...state,
        globalStatistics: action.payload,
        loading: action.loading,
      };
    case types.GET_COUNTRY_STATISTICS:
      return { ...state, countryListStatistics: action.payload };
    default:
      return state;
  }
}
