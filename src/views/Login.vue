<template>
  <div name="Login">
    login

    <router-link to="/home">to home</router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {
    this.setToken();
    this.getToken();
  },
  methods: {
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
</style>
