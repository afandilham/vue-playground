<template>
  <div class="flex justify-start items-end">
    <button
      class="
        flex
        p-2
        text-xs
        xs:text-sm
        sm:text-sm
        md:text-md
        lg:text-base
        xl:text-md
        font-semibold
        text-gray-800
        bg-gray-100
        opacity-70
        hover:opacity-90
        transition-all
        ease-in
        border-t-2 border-l-2 border-r-2
        rounded-tl-md rounded-tr-md
        shadow-sm
      "
      @click="selectedComponent('form-feedback')"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        ></path>
      </svg>
      <span class="ml-1">Write</span>
    </button>
    <button
      class="
        flex
        p-2
        text-xs
        xs:text-sm
        sm:text-sm
        md:text-md
        lg:text-base
        xl:text-md
        font-semibold
        text-gray-800
        bg-gray-100
        opacity-70
        hover:opacity-90
        transition-all
        ease-in
        border-t-2 border-l-2 border-r-2
        rounded-tl-md rounded-tr-md
        shadow-sm
      "
      @click="selectedComponent('list-feedback')"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
        ></path>
      </svg>
      <span class="ml-1">Feedbacks</span>
    </button>
  </div>
  <component :is="selectedNav"></component>
</template>

<script>
import FormFeedback from './FormFeedback.vue';
import ListFeedback from './ListFeedback.vue';

export default {
  components: {
    FormFeedback,
    ListFeedback,
  },
  data() {
    return {
      selectedNav: 'form-feedback',
    };
  },
  methods: {
    selectedComponent(cmp) {
      this.selectedNav = cmp;
    },
  },
};
</script>
