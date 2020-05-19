<template>
  <div class="home">
    <main class="container d-grid resp">
      <AppCard v-for="item in items" :key="item.id" :galleryItem="item"></AppCard>
    </main>
    
  </div>
</template>

<script>
import AppCard from '../components/app-card/AppCard.vue'; 

export default {
  name: 'Home',

  data() {
    return {
      items: []
    }
  },

  created() {
    this.items = this.$store.state.galleryItems;

    this.$store.subscribe((mutation, state) => {
      this.items = state.galleryItems;
    })
  },

  components: {
    AppCard
  },
}
</script>
