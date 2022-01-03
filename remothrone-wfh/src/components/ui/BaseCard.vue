<template>
  <div class="card" :class="[cardSize, colorBackground]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'bg-gray-200',
    }
  },
  computed: {
    cardSize() {
      if (this.size === "small") {
        return "container mx-auto max-w-sm";
      }
      if (this.size === "medium") {
        return "container mx-auto max-w-md";
      }
      if (this.size === "large") {
        return "container mx-auto max-w-lg";
      }
      if (this.size === "extra") {
        return "container mx-auto max-w-2xl";
      }
      if (this.size === "super") {
        return "container mx-auto max-w-6xl";
      }

      if (this.size === "super-large") {
        return "container mx-auto max-w-7xl";
      }
    },
    colorBackground() {
      if (this.color === "white") {
        return "bg-gray-200";
      } else {
        return "bg-gray-600 text-gray-200";
      }
    }
  }
}
</script>

<style scoped>
.card {
  @apply p-6 rounded-sm shadow-lg shadow-gray-700;
}
</style>