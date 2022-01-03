<template>
  <app-nav></app-nav>
  <router-view></router-view>
</template>

<script>
import AppNav from './components/layout/AppNav.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default {
  components: {
    AppNav,
    AppFooter,
  }
}
</script>