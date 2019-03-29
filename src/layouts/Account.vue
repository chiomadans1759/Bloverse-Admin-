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
            <dashboard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import AccountHeader from "@/components/AccountHeader.vue";
import AccountSidebar from "@/components/AccountSidebar";

export default {
  components: {
    AccountHeader,
    AccountSidebar,
    Dashboard
  },
  name: "account-layout"
};
</script>

<style scoped>
<<<<<<< HEAD
#account-layout {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
=======
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
>>>>>>> 7093933b59868e959e3cc280e2768908b2a45056
}
</style>
