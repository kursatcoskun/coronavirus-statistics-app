import axios from 'axios';

export const StatisticsService = {

    getGlobalCoronaVirusStatistics() {
        return axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then((res) => res.data)
    },

    getCountryListVirusStatistics() {
        return axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then((res) => res.data)
    }
}
