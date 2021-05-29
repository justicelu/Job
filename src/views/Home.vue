<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="currentRoute" @select="selectVal">
          <el-menu-item index="a">招聘管理</el-menu-item>
          <el-menu-item index="b">常用信息</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <TableList v-if="currentRoute === 'a'"></TableList>
        <Other v-else></Other>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Other from "./home/other";
import TableList from "./home/table";

export default {
  name: "Home",
  data() {
    return {
      currentRoute: "a",
    };
  },
  components: { Other, TableList },
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
</style>
