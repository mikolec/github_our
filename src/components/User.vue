<template>
  <b-card :src="user.avatar_url">
    <template class="mb-10 mt-5" slot="title">{{ userNameLogin }}</template>
    <div>Zarejestrowany {{ days }} dni temu</div>
  </b-card>
</template>

<script setup>
import { mixins } from "../mixins";

export default {
  name: "User",
  props: ["user"],
  mixins: [mixins],
  computed: {
    userNameLogin() {
      var name = this.user.name;
      var login = this.user.login;
      return name.replace(" ", ` :${login}: `);
    },
    days() {
      return this.getDaysUntilNow(this.user.created_at);
    },
  },
};
</script>
