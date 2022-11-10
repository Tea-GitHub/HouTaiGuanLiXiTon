import VueRouter from "vue-router"

import Main from "../views/Main"
import Home from "../views/home"
import User from "../views/User"
import mall from "../views/mall"
import page1 from "../views/other/pageOne"
import page2 from "../views/other/pageTwo"
import login from "../views/Login/login"

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main,
            redirect: '/home' , //重定向
            children: [
                // {
                //     path: "/home",
                //     name: "home",
                //     component: Home
                // },
                // {
                //     path: "/user",
                //     name: "user",
                //     component: User
                // },
                // {
                //     path: "/mall",
                //     name: "mall",
                //     component: mall
                // },
                // {
                //     path: "/page1",
                //     name: "page1",
                //     component: page1
                // },
                // {
                //     path: "/page2",
                //     name: "page2",
                //     component: page2
                // },
            ]
        },
        {
            path:"/login",
            name:"login",
            component:login
        }
    ]
})
export default router