<template>
  <section id="login" class="container mx-auto max-w-lg text-gray-200 mt-10 px-3">
    <h1 class="text-center font-semibold text-4xl">{{ switchModeCaption }}</h1>
    <p class="text-center pt-4">{{ switchModeCaption }} and start applying your favorite jobs</p>
    <form class="mt-10">
      <div class="flex flex-col mb-4">
        <input class="py-3 px-4 mt-2 text-sm rounded-md bg-slate-600 outline-none placeholder:text-gray-300" type="text" placeholder="Email" name="email" autocomplete="off">
      </div>
      <div class="flex flex-col">
        <input class="py-3 px-4 mt-2 text-sm rounded-md bg-slate-600 outline-none placeholder:text-gray-300" type="password" placeholder="password" name="password">
      </div>
      <base-button color="primary" class="w-full mt-6">{{ switchModeCaption }}</base-button>
      <div class="mt-8">
        <base-button type="button" color="transparent" class="inline-block w-full" @click="switchAuthMode">{{ switchButtonCaption }}</base-button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mode: 'login',
    };
  },
  computed: {
    switchModeCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchButtonCaption() {
      if (this.mode === 'login') {
        return 'Register new Account';
      } else {
        return 'Already have an account?';
      }
    }
  },
  methods: {
    submitForm() {
      if (this.mode === 'login') {

      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    }
  }
}
</script>