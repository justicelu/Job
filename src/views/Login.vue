<template>
  <div name="Login" class="login">
    <el-card>
      <el-form ref="form" :model="form" label-width="40px">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="center">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="form = {}">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      form: {
        name: "root",
        password: "123456",
      },
    };
  },
  created() {
    this.setToken();
    this.getToken();
  },
  methods: {
    message1(type, str, time) {
      this.$message({
        message: str,
        type: type,
        duration: time,
      });
    },
    onSubmit() {
      if (this.form.name === "root" && this.form.password === "123456") {
        this.message1("success", "登陆成功", 1000);
        localStorage.setItem("login", true);
        this.$router.push("/home");
      } else {
        this.message1("error", "账号密码输入错误!", 1000);
      }
    },
    setToken() {
      localStorage.setItem("token", "12345");
    },
    getToken() {
      let token = localStorage.getItem("token");
      console.log("设置的token为", token);
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped >
.login {
  width: 100%;
  height: 100%;
  background-image: url(https://api.sunweihu.com/api/bing1/api.php);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.el-card {
  width: 400px;
  height: 200px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.el-container {
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.center {
  transform: translateX(20%);
}
</style>
