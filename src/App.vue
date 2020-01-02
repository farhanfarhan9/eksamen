<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/pdwia/Navbar.vue';

export default {
  name: 'App',
  components: {
    'app-navbar': Navbar
  },
  mounted: function() {}
}
</script>
