<template>
<div class="account">
<div class="left">
<AccountSidebar />
</div>
<div class="right">
<AccountHeader />
<div class="main-container">
   <div class="container row justify-content-center">
            <div class="col-md-11">
                 <dashboard />
            </div>
       
          </div>
        </div>
</div>
</div>
  <!-- <div class="account-layout">
    <div class="row no-gutter">
      <div class="col-md-2 pr-0">
        <AccountSidebar />
      </div>
      <div class="col-md-10 pl-0">
        <AccountHeader />
        <div class="main-container">
          <div class="container row justify-content-center">
            <div class="col-md-11">
                 <dashboard />
            </div>
       
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import Dashboard from "@/views/Dashboard.vue"
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
.account-layout {
  overflow-x: hidden !important;
  width: 100% !important;
  
}
.main-container{
  background: #F5F5F5;
 min-height:100vh;
 width: 100%;
}
.account{
  width: 100%
}
.left{
 
  width:15%;
  position: fixed;
  height: 100vh
}
.right{
  float: right;
  width: 85%;
}
</style>
