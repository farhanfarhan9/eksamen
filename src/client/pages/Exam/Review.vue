<template>
  <div class="flex justify-center">
    <!-- Card -->
    <div class="w-full md:w-8/12 lg:w-6/12 bg-white rounded shadow">
      <!-- Card Body -->
      <div class="p-4">
        <h2 class="text-2xl">
          Review Ujian {{ exam.name }}
        </h2>
        <div class="mt-4">
          <div class="table w-full">
            <div class="table-row">
              <div class="table-cell font-medium bg-pink-300 px-4 py-2 border border-pink-400">Mata Ujian</div>
              <div class="table-cell font-medium bg-pink-300 px-4 py-2 border border-pink-400">Dosen</div>
            </div>
            <div class="table-row">
              <div class="table-cell px-4 py-2 border border-pink-400">{{exam.name}}</div>
              <div class="table-cell px-4 py-2 border border-pink-400">Endavor</div>
            </div>
          </div>
        </div>
        <div class="flex justify-around -mx-2 mt-4">
          <div class="w-6/12 px-2">
            <button class="w-full p-2 bg-pink-400 text-white border border-pink-400 rounded " @click="startExam">
              Mulai Ujian
            </button>
          </div>
          <div class="w-6/12 px-2">
            <button class="w-full p-2 text-pink-600 border border-pink-400 rounded" @click="goBack">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'ReviewExamPage',
  mounted: function() {
    this.exam = this.$store.state.exams.find(item => item.id == this.$route.params.id);
  },
  methods: {
    startExam: function () {
      Swal.fire({
        title: 'Apakah anda yakin untuk mulai?',
        text: 'Waktu timer akan terus berjalan ketika anda tidak membuka halaman ujian.',
        icon: 'question',
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText: 'Ya, mulai',
        confirmButtonColor: '#F687B3',
        cancelButtonText: 'Batalkan',
        allowOutsideClick: false,
      }).then(({ value }) => {
        if (value) {
          this.$router.replace('take');
        }
      })

    },
    goBack: function () {
      this.$router.back();
    }
  },
  data() {
    return {
      exam: {}
    }
  }
};
</script>

<style></style>
