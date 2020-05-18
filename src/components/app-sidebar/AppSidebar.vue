<template>
    <header id="app-sidebar" class="navbar col sm-w fixed top left d-around-s">
        <router-link to="/"><img class="col-logo" src="../../assets/logo-krly.png" alt="logo"></router-link>
        <nav>
            <ul class="navbar-menu">
                <li>Projets</li>
                <li>Experimentations</li>
                <li>Illustrations</li>
                <li><router-link to="/about">A propos</router-link></li>
            </ul>
        </nav>
        <footer class="d-none-m">
            carlyne.lapierre@gmail.com
        </footer>
    </header>
</template>

<style lang="scss">
    @import url('./_app-sidebar.scss');
</style>

<script>
    export default {
        name: 'app-sidebar'
    }
</script>