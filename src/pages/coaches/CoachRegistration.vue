<template>
<!--adding a single root element for the animations -->
<div>
    <section>
        <base-card>
            <h2>Register as a coach now</h2>
            <coach-form @save-data="saveCoach"></coach-form>
        </base-card>
    </section>
</div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        saveCoach(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
}
</script>