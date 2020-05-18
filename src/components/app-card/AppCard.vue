<template>
    <article id="app-card" class="content-box space-out gallery">
        <h1>{{ galleryItem }}</h1>
       <router-link :to="path + galleryItem.id ">Voir +</router-link>
    </article>
</template>

<style>
#app-card {
    border: 1px solid red;
}   
</style>

<script>
export default {
    name: "app-card",
    data: function() {
        return {
            path: ""
        }
    },
   
    props: ['galleryItem'],

    mounted () {
        if (this.galleryItem.category == "projet") {
            return this.path = "project/";
        } else if (this.galleryItem.category == "illus"){
            return this.path = "illus/";
        } else {
            return this.path = "experimentation/";
        }
    }
}
</script>