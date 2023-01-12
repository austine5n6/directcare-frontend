import axios from 'axios';
const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login(user) {
        return axios.post(API_URL + 'signin', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
    }
    register(user) {
        return axios.post(API_URL + 'signup', {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        })
    }

    logout() {
        localStorage.removeItem('user');
    }
}
export default new AuthService();