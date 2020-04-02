<template>
  <v-card class="overflow-hidden">
    <nav-bar />
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
      style="background-image: url(https://livedemo00.template-help.com/wt_53104_v1/images/background-01-1920x900.jpg); background-size: cover;"
    >
      <v-container style="height: 1000px; padding-top: 250px;">
        <router-view />
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>
