<template>
  <div class="home">
    home
    <router-link to="/login">to login</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(192, 226, 226);
}
</style>
