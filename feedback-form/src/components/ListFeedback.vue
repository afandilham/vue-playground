<template>
  <base-card class="p-4">
    <base-button 
      class="rounded-full shadow-lg hover:animate-spin" 
      @click="loadData"
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        ></path>
      </svg>
    </base-button>
    <result-feedback
      v-for="result in results"
      :key="result.id"
      :satisfaction="result.satisfaction"
      :comment="result.comment"
    >
    </result-feedback>
  </base-card>
</template>

<script>
import ResultFeedback from './ResultFeedback.vue';

export default {
  components: {
    ResultFeedback,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadData() {
      fetch(
        'https://feedback-form-899bb-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json'
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              satisfaction: data[id].satisfaction,
              comment: data[id].comment,
            });
          }
          this.results = results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
BaseCard
