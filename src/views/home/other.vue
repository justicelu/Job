<template>
  <div name="other">
    常用信息 <el-button type="danger" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: "other",
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
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped >
</style>
