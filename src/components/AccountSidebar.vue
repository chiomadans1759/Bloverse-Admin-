<template>
  <div class=" sidebar">
    <nav class="navbar ">
      <div>
        <img
          src="/assets/logo2.svg"
          alt=""
        >
        <span class="ml-2 logo-header">bloverse</span>
      </div>

    </nav>
    <ul
      class="sidebar-area mt-4"
      style="list-style:none; padding:15px 25px"
    >
      <li>
        <i class="fas fa-chart-pie"></i>
        <span class="ml-3"> Dashboard </span>
      </li>
      <li>
        <i class="fas fa-users"></i>
        <span class="ml-3">Users</span>
      </li>

    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar .sidebar-header {
  display: flex;
  align-items: center;
  margin: 15px 20px;
}

.sidebar .logo-header {
  color: #096dd9;
  font-size: 20px;
  font-family: comfortaa;
}
.sidebar {
  background: #ffffff;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  
}
.sidebar .sidebar-area li {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
}
.sidebar .fas {
  color: #096dd9;
}
.sidebar span {
  line-height: 0;
}
</style>
