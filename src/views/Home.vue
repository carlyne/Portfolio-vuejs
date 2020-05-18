<template>
  <div class="home">
    <h1>Home page</h1>
    <AppCard></AppCard>
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
