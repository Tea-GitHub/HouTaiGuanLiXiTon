//接口请求都写在这里

import axios from "./axios";

export const getMenu = (params) => {
    return axios.request({
        url: "/permission/getMenu",
        method: "post",
        data: params
    })
}

export const getData = () => {
    return axios.request({
        url: "/home/getData",
        method: "get",
    })
}

export const getUser = (params) => {
    return axios.request({
        url: "/user/getUser",
        method: "get",
        params
    })
}

// export const getMENU = (params) => {
//     return axios.request({
//         url: "/user/getUser",
//         method: "post",
//         data: params
//     })
// }