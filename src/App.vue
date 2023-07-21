<template>
  <v-app>
    <AppBar />
    <Drawer />
  </v-app>
</template>

<script lang="ts">
import AppBar from "./views/Appbar.vue";
import Drawer from "./views/Drawer.vue";
export default {
  components: {
    AppBar,
    Drawer,
  },
};
</script>
