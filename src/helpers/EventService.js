import axios from 'axios';
const apiClient = axios.create({
    baseURL :'https://apifake9898.herokuapp.com/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getProducts(){
        return apiClient.get('products/')
    },
}