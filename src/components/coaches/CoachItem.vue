<template>
    <li>
        <h3>{{ fullName }}</h3>
        <p>{{ description }}</p>
        <h4>€{{ rate }}/hour</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :title="area"></base-badge>
        </div>
        <div class="actions">
            <base-button mode="outline" link :to="coachContactLink">Contact coach</base-button>
            <base-button link :to="coachDetailsLink">Coach details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'areas', 'rate', 'description'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink() {
            return '/coaches/' + this.id + '/contact';
        }, 
        coachDetailsLink() {
            return '/coaches/' + this.id;
        }
    }
}
</script>

<style scoped>
li {
  margin: 1.8rem 0;
  margin-bottom: 0px;
  border-radius: 0px;
  padding: 1rem;
  background: #fed330;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>