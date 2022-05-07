<template>
<div id="app">
  <ul>
    <div><img :src="require('@/assets/'+item.photo1)">{{photo1}}</div>
    <li v-for="kouka in koukaList" :key="kouka">{{kouka}}</li>
  </ul>
</div>
</template>
<script>
export default {
  
}
</script>
