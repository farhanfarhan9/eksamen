<template>
  <Container>
    <Card class="lg:w-full" style="min-height: 100vh">
      Home
    </Card>
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
  data() {
    return {

    }
  }
};
</script>
