<template>
  <div class="home">
    <h1>Home page</h1>

    <main class="container d-grid resp">
      <router-link to="/project/01" ><AppCard></AppCard></router-link>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
      <AppCard></AppCard>
    </main>
    
  </div>
</template>

<script>
import AppCard from '../components/app-card/AppCard.vue';

export default {
  name: 'Home',
  components: {
    AppCard
  }
}
</script>
