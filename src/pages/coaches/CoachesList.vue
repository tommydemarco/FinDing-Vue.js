<template>
<section>
    FILTER
</section>
<section>
    <div class="controls">
        <button @click="null">Refresh</button>
        <router-link to="/register">Register as a coach</router-link>
    </div>
    <h3 v-if="!hasCoaches">There are no coaches</h3>
    <ul>
        <li v-for="coach in filteredCoaches" :key="coach.id">
            {{ coach.firstName }} 
        </li>
    </ul>
</section>  
</template>

<script>
export default {
    computed: {
        filteredCoaches() {
            console.log(this.$store.getters['coaches/coaches'])
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    }
}
</script>