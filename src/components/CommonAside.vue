<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <el-menu-item
      @click="clickMenu(item)"
      :index="item.path + ''"
      v-for="item in noChildren"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.lable }}</span>
    </el-menu-item>
    <el-submenu index="1" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.lable }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subIndex"
      >
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex + ''">{{
          subItem.lable
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      // isCollapse: false,
      menu: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //z
    clickMenu(item) {
      if (
        this.$route.path !== item.name &&
        !(this.$route.path === "/home" && this.$route.path === "/")
      )
        this.$router.push({
          name: item.name,
        }),
          this.$store.commit("selectMenu", item);
    },
  },
  // mounted(){
  //   this.$bus.$on('xxx', (data) => {
  //           console.log('我是CommonHeader组件,收到了数据', data)
  //           this.isCollapse=data
  //       })
  // },
  computed: {
    //没有子菜单
    noChildren() {
      return this.asyncMenu.filter((item) => {
        return !item.children;
      });
    },
    //有子菜单
    hasChildren() {
      return this.asyncMenu.filter((item) => {
        return item.children;
      });
    },
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    asyncMenu() {
      return this.$store.state.menu; //
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu h3 {
  color: #fff;
  text-align: center;
  line-height: 48px;
}
/* .el-menu-vertical-demo {
  overflow-y: none;
  overflow-x: none;
} */
.el-menu {
  height: 100vh;
  border: none;
}
</style>