import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VModal from "vue-js-modal";
import Notify from "vue-notifyjs";

import { ValidationProvider } from 'vee-validate';
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Notify, {
  horizontalAlign: "center",
  verticalAlign: "top"
});
Vue.use(VModal, { dynamic: true });
Vue.component('ValidationProvider', ValidationProvider);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#107abe',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
