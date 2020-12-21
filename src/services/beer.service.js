import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4004/beer/';

class BeerService {
    getPublicContent(){
        return axios.get(API_URL + 'all')
    }

    getBeers(page, size){
        return axios.get(API_URL + 'all?page='+page+'&size='+size)
    }
}

export default new BeerService();