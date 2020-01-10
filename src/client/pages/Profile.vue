<template>
  <Container>
    <Card class="mt-4 mb-4 lg:w-full">
      <h2 class="text-2xl border-b mb-5">Profile</h2>
      <div class="flex justify-center flex-row">
        <img class="image-center rounded-full shadow border-2 mb-5 border-pink-400 w-40" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/256/man-icon.png" alt="">
      </div>
      <div class="flex justify-center items-center flex-col ">
        <div class="mb-5">
        <table class="table-auto">
          <tbody>
            <tr>
              <th class="text-left border px-4 py-2">Nama Lengkap :</th>
              <td class="border px-4 py-2">Aditya Raka</td>
            </tr>
            <tr class="bg-gray-100">
              <th class="text-left border px-4 py-2">NIS          :</th>
              <td class="border px-4 py-2">65534</td>
            </tr>
            <tr>
              <th class="text-left border px-4 py-2">Kelas        :</th>
              <td class="border px-4 py-2">XII-A</td>
            </tr>
            <tr>
              <th class="text-left border px-4 py-2">Jurusan      :</th>
              <td class="border px-4 py-2">IPA</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div >
          <Button v-on:click="logout">Keluar</Button>
        </div>
      </div>
    </Card>
  </Container>
</template>

<script>
import Container from '../components/pdwia/Container.vue';
import Card from '../components/pdwia/Card.vue';
import { fuchsia } from 'color-name';
import Button from '../components/pdwia/Button.vue';

export default {
  name: 'ProfilePage',
  components: {
    Container,
    Card,
    Button
  },
  methods:{
    logout: function(){
      this.$router.push('/login')
    } 

  },
  data() {
    return {

    }
  }
};
</script>
