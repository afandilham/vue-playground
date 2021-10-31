<template>
  <app-header
    first-title="My"
    second-title="Portofolio"
    bg-title="Works"
  >
  </app-header>
  <div class="divider-content flex justify-center my-8"></div>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <base-card class="rounded-sm py-8 shadow-md" v-for="project in dataProjects" :key="project.id">
      <template #default>
        <project-item
          :name="project.name"
          :img="project.img"
        >
        </project-item>
      </template>
    </base-card>
  </section>
</template>

<script>
import ProjectItem from "../components/projects/ProjectItem.vue";

export default {
  components: {
    ProjectItem,
  },
  inject: ['dataProjects']
}
</script>