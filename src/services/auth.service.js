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

    register(username, email, password, role){
        return axios.post(API_URL + "create", {
            username,
            email,
            password
        });
    }

    confirmResetPassword(code, email, newPassword){
        return axios.post(API_URL + "confirm-reset-password", {
            code:code,
            email: email,
            password: newPassword
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    hasPermission(role){
        let user = JSON.parse(localStorage.getItem('user'));
        if(user.role == role) {
            return true;
        }
        return false;

    }
}

export default new AuthService();


export const isAuthenticated = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return token ? true : false
}

