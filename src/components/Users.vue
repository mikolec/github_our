<template>
  <div>
    <user v-for="u in users" :key="u.login" :user="u"></user>
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "Users",
  components: {
    User,
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
