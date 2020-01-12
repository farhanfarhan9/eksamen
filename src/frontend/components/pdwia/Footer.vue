<template>
  <footer class="mx-auto bg-gray-700 text-gray-300 shadow flex flex-col justify-center items-center py-10">
    <p>
      Yang Keren &copy; 2019.
    </p>
    <ul class="flex">
      <li class="mx-1">
        <a target="_blank" href="https://github.com/katonsa">
          Katon
        </a>
      </li>
      <li class="mx-1">
        <a target="_blank" href="https://github.com/syech">
          Syech
        </a>
      </li>
      <li class="mx-1">
        <a target="_blank" href="https://github.com/AdityaRaka">
          Aditya
        </a>
      </li>
      <li class="mx-1">
        <a target="_blank" href="https://github.com/Tinesh14">
          Tinesh
        </a>
      </li>
      <li class="mx-1">
        <a target="_blank" href="https://www.google.com/search?q=kucing&tbm=isch">
          Meong
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  ul > li:not(:last-child)::after {
    content: "/";
    display: "block";
  }
</style>
