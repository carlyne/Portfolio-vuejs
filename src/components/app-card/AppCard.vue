<template>
    <article id="app-card" class="content-box space-out gallery">
        <h1>{{ galleryItem }}</h1>
       <router-link :to="'project/' + galleryItem.id "><p>element</p></router-link>
    </article>
</template>

<style>
#app-card {
    border: 1px solid red;
}   
</style>

<script>
import { mapState } from 'vuex';

export default {
    name: "app-card",   

    props: ['galleryItem'],

    computed: {
        ...mapState(['project'])
    }
}
</script>