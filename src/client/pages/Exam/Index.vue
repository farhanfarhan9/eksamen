<template>
  <Container class="p-4 lg:p-0 lg:my-10">
    <router-view></router-view>
  </Container>
</template>

<script>
import Container from '../../components/pdwia/Container.vue';

export default {
  name: 'ExamPage',
  components: {
    Container
  }
};
</script>

<style>
</style>
