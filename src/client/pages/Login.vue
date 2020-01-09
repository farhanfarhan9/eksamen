<template>
  <div class="mt-5 container mx-auto flex justify-center p-4">
    <Card class="w-full lg:w-3/6">
      <h1 class="text-2xl">Login</h1>
      <div>
        <form v-on:submit.prevent="login">
          <div class="mb-2.1">
            <label class="block text-gray-700 mb-1" for="username">Nama pengguna</label>
            <input :class="inputClass" v-model="username" id="username" type="text">
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 mb-1" for="password">Kata sandi</label>
            <input :class="inputClass" v-model="password" id="password" type="password">
          </div>
          <div>
            <Button class="w-full" type="primary" @click="login">
              Masuk
            </Button>
          </div>
        </form>
      </div>
    </Card>
    <!-- </div> -->
  </div>
</template>

<script>
import Card from '../components/pdwia/Card.vue';
import Button from '../components/pdwia/Button.vue';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: 'LoginPage',
  components: {
    Card: Card,
    Button,
  },
  data () {
    return {
      username: '',
      password: '',
      inputClass: {
        'block w-full px-2 py-2 bg-gray-100 focus:bg-white border rounded focus:outline-none focus:border-blue-800 leading-tight': true
      }
    }
  },
  methods: {
    login: function() {
      fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({username: this.username, password: this.password}),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
        .then(res => {
          if (res.error) throw new Error(res.message);

          Toast.fire({
            icon: 'success',
            title: res.message
          })

          this.$store.commit('loggedIn', this.username);
          this.$router.push('/');
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.message
          })
        })
    }
  }
}
</script>

<style scoped>
  body {
    /** Scoped, will not make changes */
    @apply bg-gray-800;
  }
</style>
