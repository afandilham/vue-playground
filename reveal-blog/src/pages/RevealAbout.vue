<template>
  <div class="mt-4">
    <timeline-header></timeline-header>
    <timeline-item></timeline-item>
  </div>
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