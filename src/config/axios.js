import axios from "axios";


const clientAxios = axios.create({
    baseURL: 'https://test-node-22.herokuapp.com'
});


export default clientAxios;