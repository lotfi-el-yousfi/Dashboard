<template>
  <v-app>
    <Toolbar></Toolbar>
    <Drawer></Drawer>
    <MainArea></MainArea>
  </v-app>
</template>

<script setup lang="ts">
import Drawer from "@/views/Drawer.vue";
import MainArea from "@/views/MainArea.vue";
import Toolbar from "@/views/Toolbar.vue";
</script>
