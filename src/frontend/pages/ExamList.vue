<template>
  <Container>
    <div class="px-4 mb-5">
      <h2 class="text-3xl">Daftar Ujian</h2>
    </div>
    <router-view></router-view>
    <div class="exams flex flex-wrap flex-col lg:flex-row px-4">
      <div class="w-full lg:w-4/12 px-1 mb-2">
        <div class="bg-white rounded shadow">
          <router-link to="/exam/123/review">
            <div class="select-none">
              <img src="https://elearning.mikroskil.ac.id/pluginfile.php/4049/course/overviewfiles/teknologiKolaborasiRPL.png" alt="Teknologi Kolaborasi Pengembangan Perangkat Lunak" class="rounded">
            </div>
          </router-link>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">
              Teknologi Kolaborasi Pengembangan Perangkat Lunak
            </h3>
            <div>
              <dl>
                <dt>Kelas</dt>
                <dd>MW-A Pagi</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../components/pdwia/Container.vue';
import Card from '../components/pdwia/Card.vue';

export default {
  name: 'ExamPage',
  components: {
    Container,
    Card
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
