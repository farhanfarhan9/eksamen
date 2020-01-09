<template>
  <Container>
    <Card class="mt-4 mb-4 lg:w-full">
      Profile
      <div class="flex justify-center flex-row">
        <img class="image-center" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/256/man-icon.png" alt="">
      </div>
      <div class="flex justify-center flex-row">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Title</th>
              <th class="px-4 py-2">Author</th>
              <th class="px-4 py-2">Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">Intro to CSS</td>
              <td class="border px-4 py-2">Adam</td>
              <td class="border px-4 py-2">858</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
              <td class="border px-4 py-2">Adam</td>
              <td class="border px-4 py-2">112</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Into to JavaScript</td>
              <td class="border px-4 py-2">Chris</td>
              <td class="border px-4 py-2">1,280</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  </Container>
</template>

<script>
import Container from '../components/pdwia/Container.vue';
import Card from '../components/pdwia/Card.vue';

export default {
  name: 'ProfilePage',
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
