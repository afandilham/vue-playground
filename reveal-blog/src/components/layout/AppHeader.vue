<template>
  <section class="relative text-center flex justify-center items-center my-12">
    <h1 class="text-5xl text-gray-200 font-poppins font-semibold mt-12 mb-4 "><span class="text-yellow-300">{{ firstTitle }}</span> {{ secondTitle }}</h1>
    <span class="portofolio-title z-10 text-9xl font-bold uppercase absolute top-1">{{ bgTitle }}</span>
  </section>
</template>

<script>
export default {
  props: ['firstTitle', 'secondTitle', 'bgTitle']
}
</script>