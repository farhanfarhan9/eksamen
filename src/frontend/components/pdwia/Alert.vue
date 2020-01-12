<template>
  <div class="alert">
    <h1>{{ title }}</h1>
    <div>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['title', 'content']
}
</script>

