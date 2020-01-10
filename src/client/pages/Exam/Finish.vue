<template>
  <!-- Card -->
  <div class="flex justify-center">
  <div class="md:w-8/12 lg:w-6/12 bg-white rounded shadow">

    <!-- Card Body -->
    <div class="px-4 py-2">
      <h2 class="text-2xl">
        Finish Ujian Bahasa Inggris
      </h2>
       <div class="mx-8">
          <table>
            <tbody>
              <tr>
                <th class="py-5 text-left px-20">Jumlah Soal : </th>
                <td class="py-5">X</td>
              </tr>
              <tr>
                <th class="text-left px-20">Jumlah Soal Yang Dikerjakan : </th>
                <td class="text-right">X</td>
              </tr>
              <tr>
                <th class="py-5 text-left px-20">Sisa Waktu : </th>
                <td class="py-5 text-right">X</td>
              </tr>
              <tr>
                <th class="text-left px-20">Total Score : </th>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </div>
      <div>
        <button @click="pergiKeBeranda" class="w-full p-2 bg-pink-400 text-white border border-pink-400 rounded mt-8">
          Kembali ke Menu
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TakeExamPage',
  methods: {
    pergiKeBeranda: function () {
      this.$router.push('/');
    }
  }
};
</script>

<style></style>
