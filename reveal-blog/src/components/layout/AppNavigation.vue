<template>
  <nav
    class="flex justify-between items-center font-mono text-gray-200 my-6 mx-4 xl:mx-0 lg:mx-2 md:mx-0 sm:mx-4"
  >
    <ul class="flex items-center">
      <li class="mx-2"><router-link class="font-semibold tracking-wider" to="/">/Home</router-link></li>
      <li class="mx-2"><router-link class="font-semibold tracking-wider" to="/projects">/Projects</router-link></li>
      <li class="mx-2"><router-link class="font-semibold tracking-wider" to="/about">/About</router-link></li>
    </ul>
    <dark-mode></dark-mode>
  </nav>
</template>

<script>
import DarkMode from './DarkMode.vue';

export default {
  components: {
    DarkMode
  }
}
</script>