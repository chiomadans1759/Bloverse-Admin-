<template>
  <div class="account">
    <div class="account-sidebar">
      <AccountSidebar />
    </div>

    <div class="account-header">
      <AccountHeader />
      <div class="account-container">
        <div class="container row justify-content-center">
          <div class="col-md-11">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountHeader from "@/components/AccountHeader.vue"
import AccountSidebar from "@/components/AccountSidebar"

export default {
  components: {
    AccountHeader,
    AccountSidebar
  },
  name: "account-layout"
};
</script>

<style scoped>
.account .account-container {
  background: #f5f5f5;
  min-height: 100vh;
  width: 100%;
}

.account .account-sidebar {
  width: 15%;
  position: fixed;
  height: 100vh;
}

.account .account-header {
  float: right;
  width: 85%;
}
</style>
