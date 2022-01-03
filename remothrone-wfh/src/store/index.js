import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import jobsModule from './modules/jobs/index';
import messagesModule from './modules/messages/index';

const store = createStore({
  modules: {
    auth: authModule,
    jobs: jobsModule,
    messages: messagesModule,
  }
});

export default store;