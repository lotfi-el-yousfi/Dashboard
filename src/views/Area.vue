<template>
  <v-card>
    <v-layout>
      <Drawer />
      <Appbar />
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Appbar from "./Appbar.vue";
import Drawer from "./Drawer.vue";

export default {
  components: {
    Appbar,
    Drawer,
  },
 };
</script>
