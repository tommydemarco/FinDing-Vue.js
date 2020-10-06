<template>
   <div class="card">
       <slot></slot>
   </div> 
</template>


<style>
.card {
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 60rem;
  background: #f7b731;
}
</style>