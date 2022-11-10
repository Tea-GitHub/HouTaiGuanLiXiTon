import Cookie from "js-cookie"
export default {
    state: {
        token: ""
    },
    mutations: {
        setToken(state, val) {
            state.token = val
            Cookie.set("token", val)   //Cookie的set方法
        },
        clearToken(state) {
            state.token = ""
            Cookie.remove("token")   //Cookie的remove方法
        },
        getToken(state) {
            state.token = state.token || Cookie.get("token")
        }
    }
}