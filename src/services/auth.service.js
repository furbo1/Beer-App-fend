import axios from 'axios';

const API_URL = "http://localhost:4004/user/";

class AuthService {
    login(email, password){
        return axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then( res => {
            if(res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data.data));
                localStorage.setItem("token", JSON.stringify(res.data.token))
            }
            return res;
        })
    }

    logout(){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    register(username, email, password){
        return axios.post(API_URL + "create", {
            username,
            email,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

}

export default new AuthService();
