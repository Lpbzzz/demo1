<template>
  <div>
    <h1>
      {message}
    </h1>
    <h1>
      {message2}
    </h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      message: "心不妥协",
      message2: "行不受限"
    };
  }
};
</script>

<style scoped>
</style>
