import Vue from 'vue'
import App from './App.vue'

//路由
import VueRouter from "vue-router"
import router from "../router/index"

//vuex
import store from "../store/index"

//axios
import http from "axios"
Vue.prototype.$http = http

//mock
import '../api/mock'

//引入使用ElementUI(按需引入)
import {
  Button,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Switch,
  DatePicker,
  Select,
  Option,
  Dialog,
  Pagination,
  MessageBox,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//样式文件
import "../src/assets/less/index.less"

Vue.config.productionTip = false  //语法提示

Vue.use(VueRouter)
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Dialog);
Vue.use(Pagination);
// Vue.use(MessageBox);
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message


//前置路由守卫
router.beforeEach((to, from, next) => {
  store.commit("getToken")
  const token = store.state.user.token //
  if (!token && to.name !== "login") {
    next({ name: "login" })
  } else if (token && to.name === "login") {
    next({ name: "home" })
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  created() {
    store.commit("addMenu", router);
  }
}).$mount('#app')
