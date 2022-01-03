<template>
  <section class="header relative h-64 min-h-full">
    <app-header></app-header>
    <jobs-filter></jobs-filter>
  </section>
  <main class="px-4 mt-12">
    <base-card class="border-l-4 border-blue-600" size="super" color="white">
      <div class="jobs-profile flex justify-between">
        <div class="flex items-center">
          <img class="rounded-full h-24" src="../../assets/img/stampindo_lancar_jaya_pt.jpg" alt="company logo">
          <div class="jobs-desc pl-4">
            <h3 class="text-md font-semibold text-indigo-700">Stampindo Lancar Jaya PT</h3>
            <h2 class="text-2xl font-semibold tracking-normal antialiased py-1">Junior Programmer</h2>
            <div class="jobs-footer text-sm font-medium text-gray-500 tracking-tighter pt-1">
              <span class="mr-3">20 Dec 2021</span>
              <span class="mr-3">Remote</span>
              <span class="mr-3">Bandung</span>
            </div>
          </div>
        </div>
        <div class="jobs-button flex flex-col justify-between">
          <base-button link color="primary" to="/contact">Contact</base-button>
          <base-button link color="secondary" to="/detail">Detail</base-button>
        </div>
      </div>
    </base-card>
  </main>
</template>

<script>
import AppHeader from '../../components/layout/AppHeader.vue';
import JobsFilter from '../../components/jobs/JobsFilter.vue';

export default {
  components: {
    AppHeader,
    JobsFilter,

  }
}
</script>

<style scoped>
span::after {
  content: ".";
  @apply ml-4;
}
</style>