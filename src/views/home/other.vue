<template>
  <div name="other">
    <el-table
      :data="tableData"
      border
      style="width: 100%; margin-top: 10px"
      v-loading="loading"
    >
      <el-table-column prop="recruitPos" label="名称" width="220">
      </el-table-column>
      <el-table-column prop="demandPos" label="内容"> </el-table-column
    ></el-table>
  </div>
</template>

<script>
export default {
  name: "other",
  data() {
    return {
      tableData: [],
      loading: false,
    };
  },
  methods: {
    message1(type, str, time) {
      this.$message({
        message: str,
        type: type,
        duration: time,
      });
    },
    loginOut() {
      this.message1("success", "退出成功", 1000);
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped >
</style>
