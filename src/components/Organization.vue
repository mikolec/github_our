<template>
  <b-card>
    <template slot="title">{{ org.login }}</template>
    <div>
      <p>ilość uczestników: {{ org.followers }}</p>
      <p>ilość repozytoriów: {{ org.repos }}</p>
      <p>data utworzenia: {{ org.created_at | date }}</p>
    </div>
  </b-card>
</template>

<script setup>
export default {
  name: "Organization",
  props: ["org"],
  filters: {
    date: function (str) {
      console.log(str);
      if (!str) {
        return "(n/a)";
      }
      str = new Date(str);
      var day = (str.getDate() < 10 ? "0" : "") + str.getDate();
      var month =
        (str.getMonth() < 9 ? "0" : "") + (str.getMonth() + 1);
      var year = str.getFullYear();
      return `${day}-${month}-${year}`;
    },
  },
};
</script>
