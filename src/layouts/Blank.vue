<template>
  <main id="blank-layout">
    <router-view />
    <footer class="text-center">
      <p class="text-muted text-capitalize">
        <b id="brand">bloverse</b>
        {{current_date}}. All rights reserved.
      </p>
    </footer>
  </main>
</template>

<script>
export default {
  name: "blank-layout",
  data() {
    return {
      current_date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
#blank-layout {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: #f5f5f5;
}

#blank-layout footer {
  font-size: 12px;
}

#blank-layout footer #brand {
  font-family: 'Comfortaa', cursive !important;
}
</style>
