import Vue from 'vue';
import { Plugin } from 'vue2-storage';

// You can pass options
Vue.use(Plugin, {
  prefix: 'app_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000, // 24 hours
  replacer: (key, value) => value
});

/* export default ({ app, route }, inject) => {
  inject('storage', Vue.$storage);
} */