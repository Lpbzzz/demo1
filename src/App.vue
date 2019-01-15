<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>{{name}}</h1>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://chenkangwei.com:3000/users/getUserInfo?id=1")
      .then(result => {
        this.$message.success("请求数据成功！");
        this.name = result.data.data.name;
      })
      // eslint-disable-next-line
      .catch(err => {
        this.$message.error("请求数据失败！");
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
