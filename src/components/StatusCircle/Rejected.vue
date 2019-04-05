<template>
  <span class="rejected"></span>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.rejected:before {
  width: 0.5rem;
  height: 0.5rem;
  content: ' \25CF';
  border-radius: 100%;
  color: #FF2737;
  margin-right: 0.3rem;
}
</style>