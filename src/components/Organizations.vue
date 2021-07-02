<template>
  <div>
    <organization v-for="o in orgs" :key="o.login" :org="o"></organization>
  </div>
</template>

<script>
import Organization from "./Organization.vue";

export default {
  name: "Organizations",
  components: {
    Organization,
  },
  computed: {
    orgs() {
      return this.$store.getters.getOrgs;
    },
  },
  mounted() {
    this.$store.dispatch("fetchOrgs");
  },
};
</script>
