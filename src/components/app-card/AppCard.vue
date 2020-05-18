<template>
    <article v-bind:style="styleObj" id="app-card" class="content-box space-out gallery">
        <p>{{ galleryItem }}</p>
       <router-link :to="path + galleryItem.id ">Voir +</router-link>
    </article>
</template>

<style>
#app-card {
    border: 1px solid #222;
    height: 200px;
}   
</style>

<script>
export default {
    name: "app-card",
    data: function() {
        return {
            path: "",
            styleObj : {
                background: 'url(' + "'" + this.galleryItem.srcImg + "'" + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }
        }
    },
   
    props: ['galleryItem'],

    mounted () {
        console.log(this.styleObj.background);
        
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