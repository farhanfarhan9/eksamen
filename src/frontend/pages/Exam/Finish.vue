<template>
  <!-- Card -->
  <div class="flex justify-center">
  <div class="md:w-8/12 lg:w-6/12 bg-white rounded shadow">

    <!-- Card Body -->
    <div class="px-4 py-2">
      <h2 class="text-2xl">
        Finish Ujian Bahasa Inggris
      </h2>
       <div class="flex flex-col">
        <div>
          <p class="font-semibold">Jumlah Soal : </p>
          <td>{{ this.$store.state.status.totalQuestion }}</td>
        </div>
        <div>
          <p class="font-semibold">Jumlah Soal Yang Dikerjakan : </p>
          <td>{{ this.$store.state.status.filledIn }}</td>
        </div>
        <div>
          <p class="font-semibold">Sisa Waktu : </p>
          <td>{{ parseInt(this.$store.state.status.remainTime / 60 )}} Menit</td>
        </div>
        <div>
          <p class="font-semibold">Total Score : </p>
          <td>{{ this.$store.state.status.score }}</td>
        </div>
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
