<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar.vue';
import Footer from './components/partials/Footer.vue';
export default {
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/styles.scss';
</style>
