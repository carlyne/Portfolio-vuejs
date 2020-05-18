<template>
  <div id="app">
    <AppSidebar></AppSidebar>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './_app';
</style>

<script>
  import AppSidebar from '../../components/app-sidebar/AppSidebar.vue';

  export default {
    components: {
      AppSidebar
    }
  }
</script>