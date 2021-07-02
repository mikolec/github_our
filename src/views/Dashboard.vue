<template>
  <v-container class="grey lighten-5">
    <v-row>
      <b-column>
        <template slot="heading">Organizacje</template>
        <organizations></organizations>
      </b-column>
      <b-column>
        <template slot="heading">Użytkownicy</template>
        <users></users>
      </b-column>
      <b-column>
        <template slot="heading">Repozytoria</template>
        <repositories></repositories>
      </b-column>
    </v-row>
  </v-container>
</template>

<script>
import Organizations from "../components/Organizations.vue";
import Users from "../components/Users.vue";
import Repositories from "../components/Repositories.vue";

export default {
  name: "Dashboard",

  components: {
    Organizations,
    Users,
    Repositories,
  },
};
</script>
