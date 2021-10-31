import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import ButtonForm from './components/ButtonForm.vue';

const app = createApp(App);

app.component('button-form', ButtonForm);

app.mount('#app');

