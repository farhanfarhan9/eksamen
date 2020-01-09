<template>
  <!-- Card -->
  <div class="bg-white rounded shadow">

    <!-- Card Body -->
    <div class="px-4 py-2">
      <h2 class="text-2xl">
        Melakukan Ujian <<{{ this.$route.params.id }}>>
      </h2>

      <div>
        <button @click="submit">
          Finish Ujian
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakeExamPage',
  methods: {
    submit: function () {
      this.$router.push('finish');
    }
  }
};
</script>

<style></style>
