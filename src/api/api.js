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
        return instance.get(`auth/me`).then(response => response.data);
    }
}