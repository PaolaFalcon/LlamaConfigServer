<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Containers / Applications</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateCreateContainer">
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <template v-for="(item, index) in items">
            <v-subheader :key="item.name">Container: {{ item.name}}</v-subheader>
            <v-list-tile v-for="app in item.apps" :key="app.name">
              <v-list-title-content>
                <v-list-title-title>&nbsp;&nbsp;&nbsp;Application: {{ app.name}}</v-list-title-title>
              </v-list-title-content>
            </v-list-tile>
            <v-divider :key="index" :inset="true"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Neptuno", apps: [{ name: "Star" }, { name: "Black" }] },
        { name: "Pluton", apps: [{ name: "Moon" }] }
      ]
    };
  },
  methods: {
    navigateCreateContainer() {
      this.$router.replace("/createContainer");
    }
  }
};
</script>
