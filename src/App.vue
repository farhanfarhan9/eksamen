<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/app.css'
import AppNavbar from './components/pdwia/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    'app-navbar': AppNavbar
  },
  mounted: function() {
    console.log(this)
  }
}
</script>
