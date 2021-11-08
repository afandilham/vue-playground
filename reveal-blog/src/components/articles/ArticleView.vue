<template>
  <main class="mx-4 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-4">
    <div class="text-gray-700 dark:text-gray-200" v-for="article in getArticle()" :key="article.title">
      <h1 class="text-4xl font-poppins font-semibold mt-12 mb-1">{{ article.title }}</h1>
      <span class="text-xs font-mono">{{ article.dateString }}</span>
      <main class="my-4">
        <div v-html="article.description" class="article font-light font-fira tracking-tight text-gray-600 dark:text-gray-300"></div>
      </main>
    </div>
  </main>
</template>

<script>
export default {
  inject: ['articles'],
  methods: {
    getArticle() {
      let articleId = this.$route.params.articleId;

      const filteredArticle = this.articles.filter(article => {
        return articleId === article.title;
      });
      
      return filteredArticle;
    }
  }
}
</script>