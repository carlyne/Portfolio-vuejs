<template>
        <article v-bind:style="styleObj" class="content-box space-out gallery" v-bind:class="[isHovering ? 'hover-on' : 'hover-off']" v-on:mouseover="mouseOver" v-on:mouseleave="mouseLeave">
            <p @click="tetest">{{ galleryItem.title }}</p>
       <router-link :to="path + galleryItem.id" >Voir +</router-link>
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
                backgroundImage: 'url(' + "'" + this.galleryItem.srcImg + "'" + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
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
    },

    methods: {
        mouseOver: function() {
            console.log('active');
            this.isHovering = true;
        },    
        mouseLeave: function(){
            console.log('not-active');
            this.isHovering = false;
        },
        tetest: function() {
            console.log('click');
        }
    }
}
</script>

