<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>DashBoard</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
    <v-text-field
      style="margin-top: 5px; margin-bottom: 5px"
      label="Search Bar"
      hide-details="auto"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
     <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>
