<template>
  <div id="content" class="mx-auto container max-w-2xl ">
    <app-navigation></app-navigation>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <footer>
      <router-view name="footer">
      </router-view>
    </footer>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import AppNavigation from './components/layout/AppNavigation.vue';

export default {
  components: {
    AppNavigation
  },
  data() {
    return {
      articles: [
        {
          title: 'Example article 1',
          dateString: '20 August 2020',
          snippets: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Illi enim inter se dissentiunt. Dici enim nihil potest verius. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. 
            <a href="http://loripsum.net/" target="_blank">Sed quid sentiat, non videtis.</a> \n </p><p>Maximas vero virtutes iacere omnis necesse est voluptate dominante. 
            Quibusnam praeteritis? Tu quidem reddes; Hos contra singulos dici est melius. Cur post Tarentum ad Archytam? Si mala non sunt, iacet omnis ratio Peripateticorum.</p> 
            <p>Audeo dicere, inquit. Philosophi autem in suis lectulis plerumque moriuntur. Aliter enim explicari, quod quaeritur, non potest. Satis est ad hoc responsum. Quo igitur, inquit, modo? </p>`,
          tags: ['article']
        },
        {
          title: 'Example article 2',
          dateString: '20 April 2020',
          snippets: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Illi enim inter se dissentiunt. Dici enim nihil potest verius. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. 
            <a href="http://loripsum.net/" target="_blank">Sed quid sentiat, non videtis.</a> \n </p><p>Maximas vero virtutes iacere omnis necesse est voluptate dominante. 
            Quibusnam praeteritis? Tu quidem reddes; Hos contra singulos dici est melius. Cur post Tarentum ad Archytam? Si mala non sunt, iacet omnis ratio Peripateticorum.</p> 
            <p>Audeo dicere, inquit. Philosophi autem in suis lectulis plerumque moriuntur. Aliter enim explicari, quod quaeritur, non potest. Satis est ad hoc responsum. Quo igitur, inquit, modo? </p>`,
          tags: ['article']
        },
      ],
      dataProjects: [
        {
          id: nanoid(),
          name: 'Work List App',
          img: '/img/Work-List-Screenshoot.png',
        },
        {
          id: nanoid(),
          name: 'Corona Virus Tracker',
          img: '/img/Corona-Virus.png',
        }
      ]
    };
  },
  provide() {
    return {
      articles: this.articles,
      dataProjects: this.dataProjects 
    }
  }
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all .3s ease-in;
}

.fade-enter-to {
  opacity: 1;
}
</style>