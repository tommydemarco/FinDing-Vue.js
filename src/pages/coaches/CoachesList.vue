<template>
  <section>FILTER</section>
  <section>
    <base-card>
        <div class="controls">
        <base-button mode="outline">Filter</base-button>
        <base-button link to="/register">Register as a coach</base-button>
        </div>
        <h3 v-if="!hasCoaches">There are no coaches</h3>
        <ul>
        <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :rate="coach.hourlyRate"
        >
        </coach-item>
        </ul>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      console.log(this.$store.getters['coaches/coaches']);
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>