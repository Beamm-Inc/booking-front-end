<template>
  <v-card class="overflow-hidden">
    <nav-bar />
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
    >
      <v-container style="height: 1000px; margin-top:225px">
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
