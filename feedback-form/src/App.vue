<template>
  <div class="container mx-auto px-4 py-12 font-quicksand">
    <the-header></the-header>
    <nav-feedback></nav-feedback>
  </div>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue'
import NavFeedback from './components/NavFeedback.vue'

export default {
  components: {
    TheHeader,
    NavFeedback,
  }
}
</script>