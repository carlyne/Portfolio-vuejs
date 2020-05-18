<template>
  <div id="app">

    <AppSidebar></AppSidebar>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../../style';

#app {
  margin-left: 25%;
}

</style>

<script>
  import AppSidebar from '../../components/app-sidebar/AppSidebar.vue';

  export default {
    components: {
      AppSidebar
    }
  }
</script>