import { createRouter, createWebHistory } from "vue-router";

import RevealHome from "./pages/RevealHome.vue";
import RevealProjects from "./pages/RevealProjects.vue";
import RevealAbout from "./pages/RevealAbout.vue";
import HomeFooter from './pages/HomeFooter.vue';
import CopyrightFooter from './pages/CopyrightFooter.vue';
import ArticleView from './components/articles/ArticleView.vue';
// import ProjectDetail from './components/projects/ProjectDetail.vue';
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    components: { 
      default: RevealHome,
      footer: HomeFooter
    },
  },
  {
    name: 'article',
    path: '/article/:articleId',
    component: ArticleView,
  },
  {
    name: "projects",
    path: "/projects",
    components: { 
      default: RevealProjects,
      footer: CopyrightFooter
    },
  },
  {
    name: "about",
    path: "/about",
    components: { 
      default: RevealAbout,
      footer: CopyrightFooter 
    }
  },
  {
    name: "NotFound",
    path: "/:notFound(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'underline'
});

// router.afterEach((to, from) => {
//   const prevHistory = to.path.split('/').length;
//   const afterhistory = from.path.split('/').length;
//   to.meta.transition = prevHistory < afterhistory ? 'slide-up' : 'slide-down';
// });

export default router;
