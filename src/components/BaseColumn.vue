<template>
  <v-col cols="12" sm="4">
    <h2><slot name="heading"></slot></h2>
    <slot></slot>
  </v-col>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
