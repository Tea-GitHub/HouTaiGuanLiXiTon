import Vuex from "vuex"
import Vue from "vue"
import user from "../store/user"
import Cookie from 'js-cookie'
Vue.use(Vuex)

const mutations = {

    //修改菜单展开与收起
    collapseMenu(state) {
        state.isCollapse = !state.isCollapse
    },
    //控制
    selectMenu(state, val) {
        if (val.name !== "home") {
            state.currentMenu = val
            const result = state.tabsList.findIndex(item => item.name === val.name)
            if (result === -1) {
                state.tabsList.push(val)
            }
        } else {
            state.currentMenu = null
        }
    },
    closeTag(state, val) {
        const result = state.tabsList.findIndex(item => item.name === val.name)
        state.tabsList.splice(result, 1)
    },
    setMenu(state, val) {
        state.menu = val,
            Cookie.set("menu", JSON.stringify(val))
    },
    clearMenu(state) {
        state.menu = [],
            Cookie.remove("menu")
    },
    addMenu(state, router) {
        if (!Cookie.get("menu")) {
            return
        }
        const menu = JSON.parse(Cookie.get("menu"))
        state.menu = menu
        const menuArray = []
        menu.forEach(item => {
            if (item.children) {
                item.children = item.children.map(item => {
                    item.component = () => import(`../views/${item.url}`)
                    return item
                })
                menuArray.push(...item.children)
            } else {
                item.component = () => import(`../views/${item.url}`)
                menuArray.push(item)
            }
        });
        
        menuArray.forEach(item=>{
            router.addRoute("Main",item)
        })
    }
}

const state = {
    isCollapse: false,
    tabsList: [
        {
            path: "/",
            name: "home",
            lable: "首页",
            icon: "s-home",
        }
    ],
    currentMenu: null,
    menu: []
}

const store = new Vuex.Store({
    mutations,
    state,
    modules: {
        user
    }
})
export default store