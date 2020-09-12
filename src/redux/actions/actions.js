import * as actionTypes from './actionTypes';
import {StatisticsService} from "../../services/statisticsService";

export function getGlobalCoronaVirusStatisticsSuccess(res, loading) {
    return {
        type: actionTypes.GET_GLOBAL_STATISTICS,
        payload: res,
        loading: loading,
    };
}

export function getCountryListCoronaVirusStatisticsSuccess(res) {
    return {
        type: actionTypes.GET_COUNTRY_STATISTICS,
        payload: res
    };
}

export function getGlobalCoronaVirusStatistics() {
    return function (dispatch) {
        return StatisticsService.getGlobalCoronaVirusStatistics().then((res) => {
            dispatch(getGlobalCoronaVirusStatisticsSuccess(res, false));
        });
    };
}

export function getCountryListCoronaVirusStatistics() {
    return function (dispatch) {
        return StatisticsService.getCountryListVirusStatistics().then((res) => {
            dispatch(getCountryListCoronaVirusStatisticsSuccess(res));
        });
    };
}