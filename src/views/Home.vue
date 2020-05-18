<template>
  <div class="home">
    <h1>Home page</h1>
    <p>{{ getTotalLength }}</p>

    <main class="container d-grid resp">
      <AppCard v-for="item in getAllElements" :key="item.id" :galleryItem="item"></AppCard>
    </main>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import AppCard from '../components/app-card/AppCard.vue';


export default {
  name: 'Home',

  computed: {
    ...mapState(['project', 'illustration', "experiment"]),
    ...mapGetters(['getTotalLength', 'getAllElements'])
  },

  components: {
    AppCard
  },
}
</script>
