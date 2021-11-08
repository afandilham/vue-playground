<template>
  <section class="relative text-center flex justify-center items-center my-12">
    <h1 class="text-4xl lg:text-5xl md:text-5xl sm:text-xl text-gray-400 dark:text-gray-200 font-poppins font-semibold mt-12 mb-4 "><span class="text-yellow-500 dark:text-yellow-300">{{ firstTitle }}</span> {{ secondTitle }}</h1>
    <span class="portofolio-title z-10 text-8xl lg:text-9xl md:text-9xl sm:text-8xl font-bold uppercase absolute top-1">{{ bgTitle }}</span>
  </section>
</template>

<script>
export default {
  props: ['firstTitle', 'secondTitle', 'bgTitle']
}
</script>