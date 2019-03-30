<template>
  <div class="navbar navbar-header">
    <div class="logo-container">
      <i class="fas fa-bars toggle"></i>
    </div>
    <span class="navbar-nav mr-auto pl-2">Colapse</span>
    <div class="user-logo">
      <span>SM</span>
    </div>
    <a
      href="#"
      class="text-muted"
    >
      <div class="dropdown">
        <i
          class="fas fa-chevron-down pl-1"
          id="dropdownMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        ></i>

        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenu"
          style="margin-left: -8rem;margin-top:.5rem"
        >
          <router-link
            to=""
            class="dropdown-item"
          > <i class="fas fa-power-off px-1"></i> Sign Out</router-link>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-header .logo-container {
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 5px 10px 4px;
}
.navbar-header .toggle {
  color: #096dd9;
}
.navbar-header span {
  font-size: 12px;
}
.navbar-header .user-logo {
  border-radius: 50%;
  background: chocolate;
  color: white;
  padding: 5px 9px;
}
.navbar-header .fa-power-off {
  color: #ff2737;
}
</style>
