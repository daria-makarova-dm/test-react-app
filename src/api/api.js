import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d6125f8b-56fe-4511-bfa3-390cf0a89dfb"
      },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const authAPI = {
    getAuth() {
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logOut() {
        return instance.delete('auth/login').then(response => response.data);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data);       
    }
}

export const userAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);   
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateUserStatus(status) {
        return instance.put('profile/status', {status: status}).then(response => response.data);
    }
}