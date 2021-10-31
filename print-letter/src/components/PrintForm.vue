<template>
  <teleport to='#app'>
    <div class="fixed top-0 left-0 h-full w-full shadow-lg bg-gray-300 dark:bg-gray-700 opacity-90 overflow-hidden"></div>
    <dialog open class="top-6 left-0 shadow-md z-10 h-screen overflow-y-auto">
      <div class="border-4 border-double border-gray-700 text-gray-700 p-3 max-w-5xl mx-auto" v-for="data in result" :key="data.nip" ref="document">
        <h1 class="text-2xl text-center font-semibold uppercase underline">Surat keterangan sakit</h1>
        <p class="text-sm text-justify pt-8">Dengan ini menerangkan bahwa berdasarkan hasil pemeriksaan yang telah dilakukan kepada pasien: </p>
        <div class="form-section px-16 py-8 leading-loose">
          <p><span class="font-semibold pr-8">Nama</span> : {{ data.nama }}</p>
          <p><span class="font-semibold pr-11">NIP &nbsp;</span> : {{ data.nip }}</p>
          <p><span class="font-semibold pr-9">Umur</span> : {{ data.umur }}</p>
          <p><span class="font-semibold">Pekerjaan</span> : {{ data.pekerjaan }}</p>
          <p><span class="font-semibold pr-6">Alamat</span> : {{ data.alamat }}</p>
        </div>
        <div class="form-closing text-sm text-justify">
          <p>Diberikan istirahat sakit selama {{ data.sakitNum }} ( {{ data.sakitWords }} ) hari terhitung mulai tanggal {{ data.dateStart }} s.d tanggal {{ data.dateEnd }}.</p>
          <p>Demikian surat ketrangan ini diberikan untuk diketahui dan dipergunakan seperlunya.</p>
        </div>
        <div class="form-signature flex flex-col items-end text-sm font-medium pb-36 pt-6">
          <div class="pr-4">Pandaan, {{ data.dateStart }}</div>
          <div>Dokter Penguji/Pemeriksa</div>
        </div>
      </div>
      <menu class="flex justify-end">
        <button-form class="px-4 mr-4" @click="$emit('close')">Close</button-form>
        <button-form @click="exportToPdf">Download pdf</button-form>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export default {
  inject: ['result'],
  emits: ['close'],
  methods: {
    exportToPdf() {
      const htmlDoc = this.$refs.document;

      html2canvas(htmlDoc).then(canvas => {
        let pdfImage = canvas.toDataURL();

        const doc = new jsPDF({
          orientation: 'landscape'
        });
        doc.addImage(pdfImage, 'PNG', 10, 10);
        doc.save('tes.pdf');
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>