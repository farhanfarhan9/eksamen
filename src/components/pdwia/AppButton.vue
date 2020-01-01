<template>
  <button class="button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'AppButton',
    props: ['type'],
    data () {
      return {
        buttonClass: {
          'button--primary': this.type == 'primary',
          'button--secondary': this.type == 'secondary'
        }
      }
    }
  }
</script>

<style scoped>
  .button {
    @apply px-2 py-2 border rounded;
    min-width: 144px;
  }

  .button:focus {
    @apply outline-none;
  }

  .button--primary {
    @apply text-white bg-blue-600 border-blue-600;

    &:hover {
      @apply bg-blue-700 border-blue-700;
    }
  }

  .button--secondary {
    @apply text-white bg-gray-600 border-gray-600;

    &:hover {
      @apply bg-gray-800 border-gray-800;
    }
  }
</style>
