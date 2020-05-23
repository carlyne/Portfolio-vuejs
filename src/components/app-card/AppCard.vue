<template>
        <article v-bind:style="styleObj" class="content-box space-out gallery">
            <router-link :to="path + galleryItem.id" tag="h2">{{ galleryItem.title }}</router-link>
    </article>
</template>

<style lang="scss">
    @import url('./_app-card.scss');
</style>

<script>
export default {
    name: "app-card",

    data: function() {
        return {
            path: "",
            styleObj : {
                backgroundColor: 'aquamarine',
                backgroundImage: 'url(' + "'" + this.galleryItem.srcImg + "'" + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            },
            isHovering: false
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

