<template>
  <main class="w-full mt-4 mx-4 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-4">
    <timeline-header></timeline-header>
    <timeline-item></timeline-item>
  </main>
</template>

<script>
import TimelineHeader from "../components/about/TimelineHeader.vue";
import TimelineItem from "../components/about/TimelineItem.vue";

export default {
  components: {
    TimelineHeader,
    TimelineItem
  }
}
</script>