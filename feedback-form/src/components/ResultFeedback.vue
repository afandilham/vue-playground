<template>
  <a href="#" class="group text-justify text-gray-200 p-4 flex justify-between items-center rounded-sm transform hover:scale-105 transition-all ease-out shadow-lg my-4" :class="classBackground">
    <p>{{ comment }}</p>
    <button class="text-3xl group-hover:animate-bounce">{{ satisfactionResult }}</button>
  </a>
</template>

<script>
export default {
  props: ['satisfaction', 'comment'],
  computed: {
    satisfactionResult() {
      switch(this.satisfaction) {
        case '1':
          return '👍';
        case '0':
          return '👎';
      }
    },
    classBackground() {
      return {
        'bg-green-500': this.satisfaction === '1',
        'bg-red-500': this.satisfaction === '0'
      }
    }
  }
}
</script>