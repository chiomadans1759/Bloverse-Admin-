<template>
  <button class="btn extra-small">
    <slot></slot>
  </button>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.extra-small {
  width: 1.625rem;
  height: 1.625rem;
  box-shadow: none;
  outline: none;
  border: 0.063rem solid rgba(0, 0, 0, .15);
  border-radius: 100% !important;
  float:right;
}


</style>
