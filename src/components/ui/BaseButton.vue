<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false, 
            default: '/'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #222;
  border: 1px solid #222;
  color: white;
  cursor: pointer;
  border-radius: 0px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all .2s ease-in-out;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(61, 61, 61);
  border-color: rgb(61, 61, 61);
}

.flat {
  background-color: transparent;
  color: #222;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #222;
  color: #222;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: white;
}
</style>