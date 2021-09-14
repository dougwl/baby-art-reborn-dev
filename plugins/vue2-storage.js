import Vue from 'vue';
import { Plugin } from 'vue2-storage';

Vue.use(Plugin);
// You can pass options
Vue.use(Plugin, {
  prefix: 'app_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000, // 24 hours
  replacer: (key, value) => value
});