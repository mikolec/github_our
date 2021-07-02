<template>
  <b-card>
    <template slot="title">{{ repo.login }}</template>
    <div>
      <p>liczba otwartych PR: {{ repo.pr_count }}</p>
      <p>liczba gwiazdek: {{ repo.stargazers_count }}</p>
      <p>
        liczba otw./zam. issue: {{ repo.open_issues_count }} /
        {{ repo.closed_issues_count }}
      </p>
      <p>
        stosunek PR do wszystkich issue: {{ repo.stargazers_count }} /
        {{ repo.open_issues_count + repo.closed_issues_count }}
      </p>
      <p>ostatni commit {{ days }} dni temu</p>
    </div>
  </b-card>
</template>

<script setup>
import { mixins } from "../mixins";

export default {
  name: "Repository",
  props: ["repo"],
  mixins: [mixins],
  computed: {
    days() {
      return this.getDaysUntilNow(this.repo.last_commit);
    },
  },
};
</script>
