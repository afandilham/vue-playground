<template>
  <base-card class="py-4">
    <form @submit.prevent="submitFeedback">
      <h2 class="pt-3 text-3xl text-center text-gray-600 font-semibold">We'd love some feedback</h2>
        <p class="pt-12 pb-4 text-2xl text-center text-gray-600 font-semibold">How would you rate our website?</p>
      <div class="flex justify-center">
        <label class="relative transition ease-in-out transform hover:scale-125 mr-2" for="satisfaction">
          <input class="absolute w-full h-full outline-none appearance-none checked:ring-4 opacity-20 cursor-pointer" type="radio" name="satisfaction" id="like" value="1" v-model="formInput.satisfaction">
          <svg class="w-14 h-14 text-green-500 z-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
        </label>
        <label class="relative transition ease-in-out transform hover:scale-125" for="satisfaction">
          <input class="absolute w-full h-full outline-none appearance-none opacity-20 cursor-pointer" type="radio" name="satisfaction" id="like" value="0" v-model="formInput.satisfaction">
          <svg class="w-14 h-14 text-red-500 z-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clip-rule="evenodd"></path></svg>
        </label>
      </div>
      <p class="pt-3 text-center font-semibold font-mono">{{ printSatisfaction }}</p>
      <div class="py-4 flex flex-col items-center text-lg text-gray-700 font-semibold ">
        <label class="mb-2" for="feedback-comment">Please leave your feedback below</label>
        <textarea class="p-3 text-sm font-medium bg-gray-300 outline-none" name="comment" id="comment" cols="60" rows="10" style="white-space: pre-wrap;" v-model="formInput.comment"></textarea>
      </div>
      <div class="flex justify-center">
        <base-button class="rounded-full w-2/5">Submit</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      formInput: {
        satisfaction: '',
        comment: ''
      }
    }
  },
  computed: {
    printSatisfaction() {
      if (this.formInput.satisfaction === '1') {
        return 'Satisfied 👍';
      } 
      
      if (this.formInput.satisfaction === '0') {
        return 'Not satisfied 👎';
      }
    }
  },
  methods: {
    submitFeedback() {
      fetch(import.meta.env.VITE_DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          satisfaction: this.formInput.satisfaction,
          comment: this.formInput.comment
        })
      })
      .then(res => {
        if (res.ok) {
          console.log(res.ok);
        } else {
          throw new Error('Could not save data');
        }
      })
      .catch(err => {
        console.log(err);
        this.error = err.message;
      });

      this.formInput.satisfaction = '';
      this.formInput.comment = '';
    }
  },  
}
</script>