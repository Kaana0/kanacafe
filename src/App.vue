<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
    setInterval(() => {
      this.getTime();
    }, 800)
  },
  methods: {
    getTime() {
      let today = new Date();
      let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let hour = ("0"+today.getHours()).slice(-2);
      let min = ("0"+today.getMinutes()).slice(-2);
      let sec = ("0"+today.getSeconds()).slice(-2);
      let day = today.getDay();
      return this.$store.state.time = `${hour}:${min}:${sec}(${week[day]})`;
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
html {
  margin: 0;
  padding: 0;
}
</style>
