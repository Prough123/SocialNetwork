import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fa125444-29b8-4972-9c66-f923562d12f2"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getProfile(userId: number){
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
}

export const getUsers = (currentPage:number, pageSize:number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data)
}
