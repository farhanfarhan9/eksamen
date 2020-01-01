<template>
  <header class="bg-blue-600 py-2">
    <div class="container mx-auto flex justify-between items-center text-white">
      <h1 class="appName">Eksamen</h1>
      <nav class="navigation">
        <ul class="navigation__items">
          <li class="navigation__item"><router-link to="/">Beranda</router-link></li>
          <li class="navigation__item"><router-link to="/announcements">Pengumuman</router-link></li>
          <li class="navigation__item"><router-link to="/support">Bantuan</router-link></li>
          <li class="navigation__item"><router-link to="/login">Masuk</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppNavbar'
  }
</script>

<style scoped>
.appName {
  @apply text-3xl;
}

.navigation__items {
  @apply flex;

  & a {
    @apply text-gray-300;

    &:hover {
      @apply text-blue-100;
    }
  }
}

.navigation__item:not(:last-child) {
  @apply mr-3;
}

</style>
