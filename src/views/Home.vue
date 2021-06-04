<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="currentRoute" @select="selectVal">
          <el-menu-item index="a">招聘管理</el-menu-item>
          <el-menu-item index="b">常用信息</el-menu-item>
          <el-menu-item index="c">退出</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <TableList v-if="currentRoute === 'a'"></TableList>
        <Other v-else-if="currentRoute === 'b'"></Other>
        <Loginout v-else></Loginout>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Loginout from "./home/loginout";
import Other from "./home/other";
import TableList from "./home/table";

export default {
  name: "Home",
  data() {
    return {
      currentRoute: "a",
    };
  },
  components: { Other, TableList, Loginout },
  methods: {
    selectVal(val) {
      this.currentRoute = val;
    },
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.el-main {
  overflow: hidden;
}
</style>
