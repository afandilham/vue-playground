<template>
  <button v-if="!link" :class="backgroundColor">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="backgroundColor">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    }
  },
  computed: {
    backgroundColor() {
      if (this.color === 'primary') return 'primary';

      if (this.color === 'secondary') return 'secondary';

      if (this.color === 'transparent') return 'transparent';
    }
  }
}
</script>

<style scoped>
button,
a {
  @apply py-2 px-6 text-gray-200 rounded-sm uppercase font-medium shadow-sm transition-all;
}

a {
  text-align: center;
}

.primary {
  @apply bg-sky-600 hover:bg-sky-500;
}

.secondary {
  @apply bg-gray-600 hover:bg-gray-500;
}

.transparent {
  @apply border-2 border-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-700;
}
</style>