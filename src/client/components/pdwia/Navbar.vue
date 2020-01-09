<template>
  <header class="mx-auto bg-pink-500 shadow">
    <nav class="p-4 lg:px-0 container mx-auto text-white flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-magenta-100">
        <router-link to="/">Eksamen</router-link>
      </h1>

      <ul class="flex">
        <template v-if="this.$store.state.authenticated">
          <li class="mr-3">
            <router-link to="/profile">
              {{ this.$store.state.username }}
            </router-link>

            <ul class="hidden">
              <li>
                <button @click="logout">
                  Keluar
                </button>
              </li>
            </ul>
          </li>
        </template>
        <li class="mr-3" v-else>
          <router-link to="/login">
            Masuk
          </router-link>
        </li>

      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout: function () {
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
