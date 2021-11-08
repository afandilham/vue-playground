<template>
  <main class="mt-20 min-h-screen mx-4 md:mx-0 sm:mx-4">
    <div class="profile flex text-gray-800 dark:text-gray-200 items-center">
      <img src="/img/profile.gif" alt="profile" class="rounded-full border-2 border-yellow-500 dark:border-yellow-300 p-2 w-20 h-20">
      <div class="flex flex-col ml-4">
        <span class="text-xs">Front End Dev | Book Enthusiast</span>
        <span class="text-lg   font-medium">Moch. Ilham Afandi</span>
      </div>
    </div>
    <base-card class="text-gray-800 dark:text-gray-200 my-10" v-for="article in articles" :key="article.title">
      <template #default>
        <article-lists
          :title="article.title"
          :dateString="article.dateString"
          :snippets="article.snippets"
        >
        </article-lists>
      </template>
    </base-card>
  </main>
</template>

<script>
import ArticleLists from "../components/articles/ArticleItem.vue";

export default {
  components: {
    ArticleLists
  },
  inject: ['articles']
}
</script>