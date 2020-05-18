<template>
    <div id="project-view">
        <h1> {{ $route.params.id}} </h1>
        <p>{{ currentProject }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Project',
    data: function() {
        return {
            currentProject: {}
        };
    },

    mounted()  {
        for(let item in this.project) {
            if (this.project[item].id == this.$route.params.id) {
                return this.currentProject = this.project[item];
            }
        }
    },

    computed: {
        ...mapState(['project']),
    }

}
</script>