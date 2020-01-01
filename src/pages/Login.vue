<template>
  <div class="mt-5 container mx-auto flex justify-center">
    <div class="lg: w-3/6 bg-gray-200 p-4">
      <h1 class="text-2xl text-center">Login</h1>
      <div>
        <form v-on:submit.prevent>
          <div class="mb-5">
            <label class="block" for="username">Nama pengguna</label>
            <input class="block w-full" :class="inputClass" v-model="username" type="text">
          </div>
          <div class="mb-5">
            <label class="block" for="password">Kata sandi</label>
            <input class="block w-full" :class="inputClass" v-model="password" type="password">
          </div>
          <div>
            <AppButton type="primary" @click="login">
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
            </AppButton>
            <AppButton type="secondary">
              Bersihkan
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/pdwia/AppButton.vue';

export default {
  name: 'LoginPage',
  // ini buat daftarin component lain secara local biar bisa dipake di bagian html nya
  components: {
    AppButton
  },
  // untuk single file component, data harus berupa fungsi bukan object lagi.
  data () {
    return {
      username: '',
      password: '',
      inputClass: {
        'px-2 py-2 border rounded focus:outline-none': true
      }
    }
  },
  methods: {
    /* selalu gunain function(), jangan arrow function biar bisa access instance vue */
    login: function() {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify({username: 'username', password: 'password'})
      }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
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
    @apply bg-gray-800;
  }
</style>
