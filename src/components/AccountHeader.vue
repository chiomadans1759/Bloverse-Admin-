<template>
  <div class="navbar navbar-header">
    <div class="logo-container">
      <i class="fas fa-bars toggle"></i>
    </div>
    <span class="navbar-nav mr-auto pl-2">Colapse</span>
    <div class="user-logo">
      <span>
        {{`${admin_details.first_name.substring(0, 1)}${admin_details.last_name.substring(0, 1)}`}}
      </span>
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
          style="margin-left: -8rem; margin-top: .5rem">
          <a
            href="#"
            class="dropdown-item"
            @click.prevent="logout"> 
            <i class="fas fa-power-off px-1"></i> Sign Out
          </a>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  data() {
    return {
      admin_details: {}
    }
  },
  methods: {
    ...mapActions(['adminLogout']),

    logout() {
      this.adminLogout()
      this.$router.push('/')
    }
  },
  created() {
    this.admin_details = JSON.parse(localStorage.getItem("bloverse_admin_user_details"))
  }
}
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
