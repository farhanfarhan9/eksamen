<template>
  <!-- Card -->
  <div class="bg-white rounded shadow">

    <!-- Card Body -->
    <div class="px-4 py-2">
      <h2 class="text-2xl">
        Finish Ujian {{ this.$route.params.id }}
      </h2>

      <div>
        <button @click="pergiKeBeranda">
          Kembali ke Menu
        </button>
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
