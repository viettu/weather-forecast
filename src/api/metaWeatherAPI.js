import Axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com';
const apiUrl = 'http://www.metaweather.com/api';

const instance = Axios.create({
    baseURL: `${proxy}/${apiUrl}`,
});

const api = {
    getLocations: async (searchTerm) => {
        const response = await instance.get(`/location/search`, {
            params: {
                query: searchTerm,
            },
        });
        return response.data;
    },

    getWeathers: async (woeid) => {
        const response = await instance.get(`/location/${woeid}`);
        return response.data;
    }
}

export default api;
