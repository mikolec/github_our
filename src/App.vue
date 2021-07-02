<template>
  <v-app>
    <v-app-bar app color="lightgrey">
      <div class="d-flex align-center">
        <v-btn href="https://docs.github.com/en/rest" target="_blank" text>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://camo.githubusercontent.com/a8bf3da6a2b756488b26692367a858ebbb4b5d77584c2fd6354fcafa7d93fd03/687474703a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d4c6f676f2d32436f6c6f722e706e67"
            transition="scale-transition"
            width="100"
          />
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
