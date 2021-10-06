<template>
  <div class="py-2">
    <label for="sakitNum" class="text-gray-700 font-semibold">Lama sakit</label>
    <div class="flex">
      <input class="pl-1 py-2 mr-14 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="number" name="sakitNum" id="sakitNum" :value="sakitNum" @input="$emit('update:sakitNum', parseInt($event.target.value))" placeholder="Sakit (Angka)">
      <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="text" name="sakitWords" id="sakitWords" :value="sakitWords" @input="$emit('update:sakitWords', $event.target.value)" placeholder="Sakit (kalimat)">
    </div>
  </div>
  <div class="py-2">
    <label for="dateStart" class="text-gray-700 font-semibold">Jangka sakit</label>
    <div class="flex items-center">
      <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="date" name="dateStart" id="dateStart" :value="dateStart" @input="$emit('update:dateStart', $event.target.value)">
      <span class="text-2xl text-gray-800 font-medium mx-6">-</span>
      <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="date" name="dateEnd" id="dateEnd" :value="dateEnd" @input="$emit('update:dateEnd', $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'sakitNum': {
      type: Number,
      required: true
    },
    'sakitWords': {
      type: String,
      required: true
    }, 
    'dateStart': {
      type: String,
      required: true
    }, 
    'dateEnd': {
      type: String,
      required: true
    },
  },
  emits: [
    'update:sakitNum',
    'update:sakitWords',
    'update:dateStart',
    'update:dateEnd',
  ]
}
</script>