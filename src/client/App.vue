<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/pdwia/Navbar.vue';
import Footer from './components/pdwia/Footer.vue';

export default {
  name: 'App',
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer
  },
}
</script>
