<template>
  <v-app>
    <v-container>
      <!-- AppBar -->
      <v-row>
        <v-col>
          <AppBar />
        </v-col>
      </v-row>
      <!-- Drawer and MainSection -->
      <v-row>
        <v-col>
          <Drawer />
        </v-col>
        <v-col>
          <MainSection />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import AppBar from "./views/Appbar.vue";
import Drawer from "./views/Drawer.vue";
import MainSection from "./views/MainSection.vue";

export default {
  components: {
    AppBar,
    Drawer,
    MainSection,
  },
};
</script>
