<template>
  <v-app>
    <router-view></router-view>
    <v-content>
      <Panel/>
    </v-content>
  </v-app>
</template>

<script>
import Panel from "./components/Panel.vue";

export default {
  name: "App",
  components: {
    Panel
  },
  data() {
    return {};
  }
};
</script>
