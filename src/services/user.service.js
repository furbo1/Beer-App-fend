import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4004/user/';

export default class UserService {
    getPublicContent(){
        return axios.get(API_URL + 'all')
    }

    getUserBoard(){
        return axios.get(API_URL + 'user', {headers: authHeader()})
    }

    


    confirmResetPassword(code, email, newPassword){
        return axios.post(API_URL + "confirm-reset-password", {
            code:code,
            email: email,
            password: newPassword
        });
    }
}

