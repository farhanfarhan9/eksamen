<template>
  <!-- Card -->
  <div class="bg-white rounded shadow">

    <!-- Card Body -->
    <div class="px-4 py-2">
      <h2 class="text-2xl">
        Review Ujian {{ this.$route.params.id }}
      </h2>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Nama</th>
              <td>Ujian X</td>
            </tr>
            <tr>
              <th>Dosen</th>
              <td>Dosen X</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button @click="startExam">
          Mulai Ujian
        </button>
        <button @click="goBack">
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewExamPage',
  methods: {
    startExam: function () {
      const doExam = confirm('Are you sure ?');

      if (doExam) {
        this.$router.push('take');
      }

    },
    goBack: function () {
      this.$router.back();
    }
  },
  data() {
    return {

    }
  }
};
</script>

<style>
  .exams > div {
  }
</style>
