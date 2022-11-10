<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <CommonAside/>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader/>
      </el-header>
      <CommonTag/>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../src/components/CommonAside.vue"
import CommonHeader from "../src/components/CommonHeader.vue"
import CommonTag from "../src/components/CommonTag.vue";
export default {
  name: "Main",
  components:{CommonAside,CommonHeader,CommonTag}
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>