<template>
  <Container class="p-4 lg:p-0 lg:my-10">
    <div class="flex flex-col md:flex-row md:flex-wrap mb-5 -mx-2">
      <!-- Exam list -->
      <div
        v-for="exam in exams"
        v-bind:key="exam.id"
        class="exam__card w-full flex-grow-0 md:w-6/12 lg:w-4/12 px-2 md:mb-4">
        
        <div class="exam__item p-4 bg-white shadow relative">
          <router-link
            class="w-full h-full bg-blue-600 absolute inset-0 opacity-0"
            style="content: ' '"
            :to="{ path: `exam/${exam.id}/review` }">
          </router-link>
          
          <div class="mb-1">
            <h2 class="text-xl font-semibold border-b-2 border-pink-400">
              {{ exam.name }}
            </h2>
          </div>
          <div class="flex flex-wrap flex-col justify-start">
            <div class="mb-1">
              <div class="font-semibold">
                Status
              </div>
              <div>
                Belum Mulai
              </div>
            </div>
            <div class="mb-1">
              <div class="font-semibold">
                Jumlah Soal
              </div>
              <div>
                20 Soal
              </div>
            </div>
            <div class="mb-1">
              <div class="font-semibold">
                Waktu Pengerjaan
              </div>
              <div>
                30 Menit
              </div>
            </div>
            <div class="mb-1">
              <div class="font-semibold">
                Tanggal dan Waktu
              </div>
              <div>
                11 Januari 2020 07:30 WIB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="pagination" class="flex justify-center">
      <nav class="flex justify-around w-full md:w-6/12 bg-white shadow rounded">
        <button class="p-2">prev</button>
        <p class="p-2">
          1 / 5
        </p>
        <button class="p-2">next</button>
      </nav>
    </div>
  </Container>
</template>

<script>
import Container from '../components/pdwia/Container.vue';
import Card from '../components/pdwia/Card.vue';

export default {
  name: 'HomePage',
  components: {
    Container,
    Card
  },
  mounted() {
    this.exams = this.$store.state.exams;
  },
  data() {
    return {
      exams: []
    }
  }
};
</script>

<style scoped>
.exam__card:first-of-type > .exam__item {
  @apply rounded-t;
}

.exam__card:last-of-type > .exam__item {
  @apply rounded-b;
}

@screen md {
  .exam__item {
    @apply rounded;
  }
}
</style>