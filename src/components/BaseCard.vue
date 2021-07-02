<template>
  <v-card>
    <!-- <slot name="avatar">
      <v-img height="250" :src="src"></v-img>
    </slot> -->
    <template v-if="src">
      <v-img height="250" :src="src"></v-img>
    </template>
    <v-card-title class="mt-3">
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style lang="scss" scoped></style>
