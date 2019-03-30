<template>
  <div class="dashboard">
    <h4 class="pt-4">Dashboard</h4>
    <div class="dashboard-area m-0 mt-3 row">
      <div class="col-md-5 first container">
        <div class="card mt-3 mb-1">
          <div class="card-body blue-right">
            <div class="card-body-first">
              <span class="pl-3 letter">{{total_creators.pending}}</span>
              <div class="pl-3 pill-area light-weight">Pending</div>
            </div>
            <a href="">
              <i class="fas fa-chevron-circle-right mr-3"></i>
            </a>
          </div>
        </div>
        <div class="card  my-2">
          <div class="card-body green-right">
            <div class="card-body-first">
              <span class="pl-3 letter">{{total_creators.accepted}}</span>
              <div class="pl-3 pill-area light-weight">Accepted</div>
            </div>
            <a href="">
              <i class="fas fa-chevron-circle-right mr-3"></i>
            </a>
          </div>
        </div>
        <div class="card  mt-2 mb-3">
          <div class="card-body red-right">
            <div class="card-body-first">
              <span class="pl-3 letter">{{total_creators.rejected}}</span>
              <div class="pl-3 pill-area light-weight">Rejected</div>
            </div>
            <a href="">
              <i class="fas fa-chevron-circle-right mr-3"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-7 p-0 second">
        <div class="mt-3 second-header">Total Users</div>
        <div class="card  mt-2 mb-3  mr-3">
          <div class="card-body">
            <div class="second-card-body-first">
              <div class="second-main-text pl-3 my-3">{{total_creators.all}}</div>
              <div class="second-bottom pt-2">
                <i class="ml-3 green-arrow fas fa-long-arrow-alt-up"></i>
                <div>
                  <div class="pl-3 pb-2 light-weight">Active: <b>56</b></div>
                  <div class="pl-3 light-weight mb-3">Inactive: <b>5</b>
                  </div>
                </div>
              </div>
            </div>
            <a href="">
              <i class="second-arrow fas fa-chevron-circle-right mr-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions(["getAllCreators",
    "getPendingCreators",
    "getAcceptedCreators",
    "getRejectedCreators"]),
  },
  created() {
    this.getAllCreators()

    setInterval(async () => {
      await this.getAllCreators()
      await this.getPendingCreators()
      await this.getAcceptedCreators()
      await this.getRejectedCreators()
    }, 10000)
  },
  computed:{
    ...mapState(["total_creators"]),
  }
}
</script>

<style scoped>
.dashboard h4 {
  font-size: 20px;
  font-weight: bold;
}

.dashboard .dashboard-area {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
}

.dashboard .card-body {
  padding: 5px;
  background: rgba(245, 245, 245, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard .card-body-first .letter {
  color: #252525;
  font-size: 32px;
  font-weight: bold;
}

.dashboard .light-weight {
  color: #b7b7b7;
  font-size: 14px;
  line-height: 15px;
}

.dashboard .blue-right {
  border-left: 4px solid rgba(2, 147, 222, 1);
}

.dashboard .letter-badge {
  font-size: 10px !important;
  letter-spacing: 0 !important;
  margin-left: 10px;
}

.dashboard .pill-area {
  display: flex;
  align-items: center;
}

.dashboard .fas {
  font-size: 40px;
  color: rgba(2, 147, 222, 1);
}

.dashboard .green-right {
  border-left: 4px solid #35e59d;
}

.dashboard .red-right {
  border-left: 4px solid #ff2737;
}

.dashboard .second .second-header {
  font-size: 20px;
  font-weight: bold;
  color: rgba(183, 183, 183, 1);
}

.dashboard .card {
  border: 0 !important;
}

.dashboard .second-bottom {
  display: flex;
  align-content: center;
}

.dashboard .green-arrow {
  color: #35e59d;
}

.dashboard .second-main-text {
  color: rgba(37, 37, 37, 1);
  font-size: 64px;
  font-weight: bold;
}

.dashboard .second-arrow {
  margin-top: 120px;
}

</style>