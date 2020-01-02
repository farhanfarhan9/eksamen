<template>
  <div class="mt-5 container mx-auto flex justify-center p-4">
    <!-- <div class="w-full lg:w-3/6 p-5 bg-white border rounded shadow"> -->
    <Card class="w-full lg:w-3/6">
      <h1 class="text-2xl">Login</h1>
      <div>
        <form v-on:submit.prevent="login">
          <div class="mb-2">
            <label class="block text-gray-700 mb-1" for="username">Nama pengguna</label>
            <input :class="inputClass" v-model="username" id="username" type="text">
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 mb-1" for="password">Kata sandi</label>
            <input :class="inputClass" v-model="password" id="password" type="password">
          </div>
          <div>
            <ExtendedButton class="w-full" type="primary" @click="login">
              <!--
                ini namanya component, pakai component gini biar bisa di pake dimana aja karena sudah kita styling
                tanpa harus masukin nama class css nya.
                @click itu shorthand directive, aslinya v-on:click.

                https://vuejs.org/v2/guide/syntax.html#Directives
                @click.native
                https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
              -->
              Masuk
              <!-- Ini namanya slot. check di Button vue component file. -->
            </ExtendedButton>
          </div>
        </form>
      </div>
    </Card>
    <!-- </div> -->
  </div>
</template>

<script>
import Card from '../components/pdwia/Card.vue';
import ExtendedButton from '../components/pdwia/ExtendedButton.vue';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
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
  // ini buat daftarin component lain secara local biar bisa dipake di bagian html nya
  components: {
    Card: Card,
    ExtendedButton
  },
  mounted: function () {
    // console.log(this.$store.state.authentication.loggedIn);
  },
  // untuk single file component, data harus berupa fungsi bukan object lagi.
  data () {
    return {
      username: '',
      password: '',
      inputClass: {
        'block w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-600': true
      }
    }
  },
  methods: {
    /* selalu gunain function(), jangan arrow function biar bisa access instance vue */
    login: function() {
      fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({username: 'username', password: 'password'})
      }).then(res => res.json())
        .then(res => {
          // if (res.error) throw new Error('Login failed.');
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          });
          this.$store.dispatch('loggedIn')
          this.$router.push('/dashboard');
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: err.message,
          });
        })
          // ini namanya promise buat gantiin callback di js
         // jangan lupa chain / method catch biar gak keluar error unhandled promise rejection.
         // buat referensi nya coba lihat disini.
         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
         // Kalau gak suka pake promise, bisa pake async await.
         // tapi async/await hanya browser modern yang bisa pakai.
         // tapi tenang karena kita pakai webpack dan babel jadi di polyfill.
    }
  }
}
</script>

<style scoped>
  /* tag style ini scoped, artinya style yang disini cuma bisa diakses sama file ini aja */
  body {
    /* ini helper si tailwindcss buat nge-apply background-gray-100. lihat page login gak di override dia harusnya background waranya abu-abu tapi tetap putih, ini karena scoped */
    /*@apply bg-gray-800;*/
  }
</style>
