<template>
  <main id="account-layout">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "account-layout"
}
</script>

<style scoped>
#account-layout {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
}
</style>
