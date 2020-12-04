import Axios from "axios";

const proxy = "https://cors-anywhere.herokuapp.com";
const api = "http://www.metaweather.com/api";

export default Axios.create({
    baseURL: `${proxy}/${api}`
});
