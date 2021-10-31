<template>
  <teleport to="#app">
    <div class="fixed top-0 left-0 h-full w-full shadow-lg bg-gray-800 dark:bg-gray-700 opacity-70 overflow-hidden"></div>
    <dialog
      open
      class="
        mx-auto
        max-w-8xl
        px-20
        top-6
        left-0
        bottom-0
        shadow-md
        z-10
        h-3/4
        overflow-y-auto
        bg-gray-700
        rounded-md
      "
      v-for="project in projectDetail" :key="project.id"
    >
      <button @click="$emit('close')" class="text-gray-200 font-bold text-2xl absolute right-0 top-0 p-4">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <h1 class="text-yellow-300 text-center font-semibold text-4xl font-poppins p-3 mx-auto">
        {{ project.name }}
      </h1>
      <img :src="project.img" :alt="project.name" class="object-contain h-3/4 w-3/4 mx-auto pt-4 rounded-md">
      <p class="text-gray-200 max-w-2xl mx-auto text-justify">{{ project.desc }}</p>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: ["projectDetail"],
  emits: ['close']
};
</script>
