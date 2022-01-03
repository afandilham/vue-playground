<template>
  <form class="flex w-full absolute max-w-2xl mx-auto px-4 top-32 right-0 left-0">
    <div class="form-group w-full mr-2 relative">
      <label for="filter" class="text-gray-200 pl-3">Search Jobs</label>
      <input type="text" class="w-full py-2 px-4 border-2 rounded-full text-sm bg-gray-200 border-blue-600 focus:outline-none" placeholder="Ex: Junior web developer, Data Scientist, etc." name="filter">
    </div>
    <base-button color="primary" class="absolute right-4 top-6 rounded-full">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </base-button>
  </form>
</template>