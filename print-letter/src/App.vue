<template>
  <div
    class="
      container
      mx-auto
      max-w-3xl
      rounded-sm
      p-4
      bg-white
      text-gray-200
      my-12
      shadow-lg
    "
  >
    <the-header title="Surat"></the-header>
    <form @submit.prevent="printDocument" class="font-titillium">
      <letter-form
        v-model:nama="inputNama"
        v-model:nip="inputNip"
        v-model:umur="inputUmur"
        v-model:pekerjaan="inputPekerjaan"
        v-model:alamat="inputAlamat"
      ></letter-form>
      <signature-form
        v-model:sakit-num="sakitNum"
        v-model:sakit-words="sakitWords"
        v-model:date-start="dateStart"
        v-model:date-end="dateEnd"
      ></signature-form>
      <button-form class="w-full" @click="submitDocument">Submit</button-form>
    </form>
  </div>
  <print-form v-if="isExit" @close="confirmExit"></print-form>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
import LetterForm from './components/LetterForm.vue';
import SignatureForm from './components/SignatureForm.vue';
import PrintForm from './components/PrintForm.vue'

export default {
  components: {
    LetterForm,
    TheHeader,
    SignatureForm,
    PrintForm
  },
  data() {
    return {
      inputNama: '',
      inputNip: '',
      inputUmur: '',
      inputPekerjaan: '',
      inputAlamat: '',
      sakitNum: 0,
      sakitWords: '',
      dateStart: '',
      dateEnd: '',
      results: [],
      isExit: false
    };
  },
  provide() {
    return {
      result: this.results
    }
  },
  methods: {
    submitDocument() {
      const data = {
        nama: this.inputNama,
        nip: this.inputNip,
        umur: this.inputUmur,
        pekerjaan: this.inputPekerjaan,
        alamat: this.inputAlamat,
        sakitNum: this.sakitNum,
        sakitWords: this.sakitWords,
        dateStart: this.dateStart,
        dateEnd: this.dateEnd
      };

      if (
        this.inputNama.trim() === '' ||
        this.inputNip.trim() === '' ||
        this.inputUmur.trim() === '' ||
        this.inputPekerjaan.trim() === '' ||
        this.inputAlamat.trim() === '' ||
        this.sakitNum === 0 ||
        this.sakitWords.trim() === '' ||
        this.dateStart.trim() === '' ||
        this.dateEnd.trim() === ''
      ) {
        this.isExit = false;
        return;
      }

      this.results.push(data);
      this.isExit = true;
    },
    confirmExit() {
      this.isExit = false;
      this.results.pop();
    }
  },
};
</script>
