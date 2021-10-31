<template>
  <h3 class="text-xl text-gray-200 text-center">{{ name }}</h3>
  <img :src="img" alt="Work List App" class="h-full w-full">
  <button @click="getProjectDetail(name)" class="text-gray-200 bg-gray-700 hover:bg-gray-600 rounded-sm w-full py-2 font-poppins font-medium transition-all ease-in">
    Details
  </button>
  <project-detail v-if="isExit" @close="confirmExit" :project-detail="tempProjectDetail"></project-detail>
</template>

<script>
import ProjectDetail from "./ProjectDetail.vue";

export default {
  components: {
    ProjectDetail
  },
  props: ['name', 'img'],
  inject: ['dataProjects'],
  data() {
    return {
      tempProjectDetail: [],
      isExit: false
    }
  },
  methods: {
    getProjectDetail(name) {
      let result;

      if (name === null) {
        this.isExit = false;
        return;
      } else {
        result = this.dataProjects.filter(data => {
          return data.name === name;
        });
      }

      this.tempProjectDetail = result;
      this.isExit = true;
    },
    confirmExit() {
      this.tempProjectDetail.pop();
      this.isExit = false;
    }
  }
}
</script>