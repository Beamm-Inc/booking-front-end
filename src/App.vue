<template>
  <v-app id="app">
    <v-progress-linear
      v-if="showNetworkProgressBar"
      :indeterminate="true"
      height="4"
      color="accent"
      style="margin:0; top:0; position:fixed; z-index:999999;"
    />
    <notifications :overlap="true" />
    <modals-container />
    <router-view />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters("core", ["showNetworkProgressBar"])
  },

  data: () => ({
    //
  }),
};
</script>
