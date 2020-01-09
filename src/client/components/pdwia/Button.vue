<template>
  <button
    class="px-2 py-2 bg-pink-400 hover:bg-pink-600 text-gray-100 rounded leading-tight"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['type']
}
</script>

<style></style>
