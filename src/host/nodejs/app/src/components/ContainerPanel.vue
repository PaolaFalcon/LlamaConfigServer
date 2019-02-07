<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-chip label>Container</v-chip>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
          <v-btn :disabled="!valid" color="sucess" @click="validate">Save</v-btn>
          <v-btn color="error" @click="cancel">Cancel</v-btn>
          <v-btn color="warning" @click="clear">Clear</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ]
  }),
  methods: {
    validate() {
      if (this.$ref.form.validate()) {
        this.snackbar = true;
      }
    },
    cancel() {
      this.$refs.form.cancel();
    },
    clear() {
      this.name = "";
      this.$refs.form.resetValidation();
    }
  }
};
</script>
