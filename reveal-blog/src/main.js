import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'

import router from './router.js'

import Basecard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import AppHeader from './components/layout/AppHeader.vue'

const app = createApp(App);

app.component('base-card', Basecard);
app.component('base-button', BaseButton);
app.component('app-header', AppHeader);

app.use(router);

app.mount('#app')
