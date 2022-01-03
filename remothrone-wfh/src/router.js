import { createRouter, createWebHistory } from "vue-router";

import JobsLists from "./pages/jobs/JobsLists.vue";
import JobsDetail from "./pages/jobs/JobsDetail.vue";
import JobsRegistration from "./pages/jobs/JobsRegistration.vue";
import ContactJobs from "./pages/jobs/ContactJobs.vue";
import MessagesLists from "./pages/messages/MessagesLists.vue";
import AuthUser from "./pages/auth/AuthUser.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsLists },
    { 
      path: '/jobs/:id',
      component: JobsDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactJobs }
      ]
    },
    { path: '/register', component: JobsRegistration },
    { path: '/messages', component: MessagesLists },
    { path: '/auth', component: AuthUser },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
