export const mixins = {
  methods: {
    getDaysUntilNow(str_date) {
      if (!str_date) {
        return 0;
      }
      var date = new Date(str_date);
      var today = new Date();
      return Math.floor(
        (today.getTime() - date.getTime()) / (1000 * 3600 * 24)
      );
    },
  },
};
