<template>
  <div class="home">
    <main class="container d-grid resp">
      <AppCard v-for="galleryItem in $store.state.galleryItems" :key="galleryItem.id" :galleryItem="galleryItem"></AppCard>
    </main>
    
  </div>
</template>

<script>
import AppCard from '../components/app-card/AppCard.vue'; 

export default {
  name: 'Home',

  components: {
    AppCard
  },
}
</script>
