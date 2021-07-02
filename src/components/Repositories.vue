<template>
  <div>
    <repository v-for="r in repos" :key="r.name" :repo="r"></repository>
  </div>
</template>

<script>
import Repository from "./Repository.vue";

export default {
  name: "Repositories",
  components: {
    Repository,
  },
  computed: {
    repos() {
      return this.$store.getters.getRepos;
    },
  },
  mounted() {
    this.$store.dispatch("fetchRepos");
  },
};
</script>
