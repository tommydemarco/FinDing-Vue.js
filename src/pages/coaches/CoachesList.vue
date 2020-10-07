<template>
<!--adding a single root element for the animations -->
<div>
  <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{error}}</p>
  </base-dialog>

  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
        <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register as a coach</base-button>
        </div>
        <div v-if="!hasLoaded">
          <base-spinner></base-spinner>
        </div>
        <h3 v-if="!hasCoaches">There are no coaches</h3>
        <ul v-if="hasCoaches">
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
</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      },
      hasLoaded: true,
      error: null,
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false 
      })
    },
    isCoach() {
        return this.$store.getters['coaches/isCoach'];
    },
    hasCoaches() {
      return this.hasLoaded && this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadCoaches() 
  }, 
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadCoaches(refresh = false) {
      this.hasLoaded = false
      try {
        await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh})
      } catch(e) {
        this.error = e.message || 'Something went wrong'
      }
      this.hasLoaded = true
    },
    handleError() {
      this.error = null
    }
  }
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