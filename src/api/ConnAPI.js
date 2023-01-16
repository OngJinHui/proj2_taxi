import axios from "axios";

const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice';

// create the connection
const ConnAPI = axios.create({baseURL: BASE_URL, headers: {'AccountKey': '+nDuB6u3TK2wYwdIsQeIaw=='}});

export default ConnAPI;