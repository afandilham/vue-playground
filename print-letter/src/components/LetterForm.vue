<template>
  <div class="py-2 flex items-center">
    <span><svg class="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
    <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="text" name="nama" id="nama" :value="nama" @input="$emit('update:nama', $event.target.value)" placeholder="Nama">
  </div>
  <div class="py-2 flex items-center">
    <span><svg class="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></span>
    <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="text" name="nip" id="nip" :value="nip" @input="$emit('update:nip', $event.target.value)" placeholder="Nip">
  </div>
  <div class="py-2 flex items-center">
    <span><svg class="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg></span>
    <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="number" name="umur" id="umur" :value="umur" @input="$emit('update:umur', $event.target.value)" placeholder="Umur">
  </div>
  <div class="py-2 flex items-center">
    <span><svg class="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
    <input class="pl-1 py-2 outline-none w-full border-b-2 border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="text" name="pekerjaan" id="pekerjaan" :value="pekerjaan" @input="$emit('update:pekerjaan', $event.target.value)" placeholder="Pekerjaan">
  </div>
  <div class="py-2 pl-7">
    <textarea class="pl-1 p-2 outline-none w-full border-2 rounded-sm border-gray-400 hover:border-gray-600 focus:border-gray-600 bg-transparent text-gray-800 placeholder-gray-500" type="text" name="alamat" id="alamat" :value="alamat" @input="$emit('update:alamat', $event.target.value)" placeholder="Alamat"></textarea>
  </div>
</template>

<script>
export default {
  props: ['nama', 'nip', 'umur', 'pekerjaan', 'alamat'],
  emits: [
    'update:nama',
    'update:nip',
    'update:umur',
    'update:pekerjaan',
    'update:alamat'
  ]
}
</script>