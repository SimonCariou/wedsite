<template>
  <div>
    <!-- <Maurice />
    <France /> -->
  </div>
</template>

<script>
import France from "~/components/France.vue";
import Maurice from "~/components/Maurice.vue";

export default {
  components: {
    France,
    Maurice,
  },
  data: () => ({ observerTitle: null, observerBody: null, intersected: false }),
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (var i in entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            } else {
              //entry.target.classList.remove("in-view");
            }
          });
        }
      },
      {
        threshold: 0.25,
      }
    );

    var items = this.$el.querySelectorAll(".observedElement");
    for (var i in items) {
      if (!items.hasOwnProperty(i)) {
        continue;
      }

      this.observer.observe(items[i]);
    }
  },
};
</script>

<style lang="sass">
</style>