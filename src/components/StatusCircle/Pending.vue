<template>
  <span class="pending"></span>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.pending:before {
  width: 0.5rem;
  height: 0.5rem;
  content: ' \25CF';
  border-radius: 100%;
  color: #0293DE;
  margin-right: 0.3rem;
}
</style>
