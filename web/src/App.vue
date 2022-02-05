<template>
  <div>
    <navbar/>
    <router-view></router-view>

  </div>
  
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
        Navbar
      }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app{
  font-family: 'Roboto', sans-serif;
}
</style>