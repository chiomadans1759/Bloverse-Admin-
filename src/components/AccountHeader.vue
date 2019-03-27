<template>
  <div class="navbar navbar-header">
    <div class="logo-container">
      <i class="fas fa-bars toggle"></i>
    </div>
      <span class="navbar-nav mr-auto pl-2">Colapse</span>
      <div class="user-logo">
        <span>SM</span>
      </div>
      <i class="fas fa-chevron-down pl-1"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-header .logo-container{
border-radius: 50%;
border:1px solid rgba(0, 0, 0, 0.15);
padding:5px 10px 4px
}
.navbar-header .toggle{
  color:#096dd9
}
.navbar-header span{
  font-size: 12px
}
.navbar-header .user-logo{
  border-radius: 50%;
  background:chocolate;
  color: white;
  padding:5px 9px 

}
</style>
