import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router';
import store from './store/index';

import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseHeader from './components/ui/BaseHeader.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-header', BaseHeader);

app.mount('#app')
