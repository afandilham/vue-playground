<template>
  <h3 class="text-3xl">
    <router-link :to="{ name: 'article', params: { articleId: title }}" class="text-yellow-500 dark:text-yellow-300 font-bold font-poppins">{{ title }}</router-link>
  </h3>
  <small class="font-serif">{{ dateString }}</small>
  <p class="font-poppins pt-2 font-medium">{{ snippets }}</p>
</template>

<script>
export default {
  props: ['title', 'dateString', 'snippets']
}
</script>