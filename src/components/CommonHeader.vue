<template>
  <header>
    <div class="l-content">
      <el-button
        @click="headerMenu"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/" class="myColor">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.lable }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/images/Snipaste_2022-07-10_21-47-52.png"),
      // isCollapse: true,
    };
  },
  methods: {
    // headerMenu() {
    //   this.$bus.$emit("xxx", this.isCollapse);
    //   this.isCollapse = !this.isCollapse;
    // },
    headerMenu() {
      this.$store.commit("collapseMenu");
    },
    logOut(){
        this.$store.commit("clearToken")
        this.$store.commit("clearMenu")
        this.$router.push("/login")
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.tabsList,
    }),
  },
};
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.l-content {
  display: flex;
  align-items: center;
}

.l-content .el-button {
  margin-right: 20px;
}

.r-content .user {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
/* .myColor /deep/ .el-breadcrumb__inner {
  color: white;
} */
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
        color: #d9bb95 !important;
}
</style>