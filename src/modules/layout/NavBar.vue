<template>
  <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-toolbar-title>BeamInc - Flight Booking</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="yellow"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                @click="logout"
              >
                <v-icon>mdi-export</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

      </v-card>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/home">Flight Booking</v-tab>
          <v-tab to="/manage">Manage Booking</v-tab>
          <v-tab>Flight Information</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</template>
<script>
import AccountService from "@/services";

export default {
  name: "NavBar",
  data() {
    return {
      visible: true,
      user: {"name":"User","email": "user@gmail.com"},
      // user: AccountService.getProfile()
    };
  },
  methods: {
    logout() {
      AccountService.logout();
    }
  }
};
</script>
