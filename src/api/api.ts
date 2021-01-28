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
    unFollow(userId: number){
        return instance.delete(`follow/${userId}`).then(res => res.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`).then(res => res.data)
    },

}

export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status})
    }
}


export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(res => res.data)
    }
}

