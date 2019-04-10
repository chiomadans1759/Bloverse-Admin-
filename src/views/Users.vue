<template>
  <main id="users">
    <header class="pt-4">
      <h5 class="font-weight-bold">Users</h5>
    </header>

    <nav class="pt-4"> 
      <button class="btn btn-primary rounded-0 mr-2">Content Creator</button>
      <button class="btn btn-link text-dark rounded-0 ml-2">Content Consumer</button>
    </nav>

    <nav class="row pt-5">
      <div class="col d-flex">
        <span class="text-muted mt-2">Showing:</span>
        <div class="dropdown">
          <button class="btn btn-link text-dark dropdown-toggle pt-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            10
          </button>
          <div class="dropdown-menu rounded-0 py-0" style="min-width: 5%;">
            <a class="dropdown-item" href="#">20</a>
            <a class="dropdown-item" href="#">30</a>
            <a class="dropdown-item" href="#">40</a>
            <a class="dropdown-item" href="#">50</a>
          </div>
        </div>
      </div>

      <div class="col-auto">
        <input type="text" class="form-control rounded-0" placeholder="Search by names...">
      </div>

      <div class="col-auto d-flex">
        <span class="text-muted mt-2">Status:</span>
        <div class="dropdown">
          <button class="btn btn-link text-dark dropdown-toggle pt-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{creator_type}} 
            <div class="badge badge-primary">
              <span v-if="creator_type == 'all'">{{all_creators.length || 0}}</span>
              <span v-if="creator_type == 'accepted'">{{accepted_creators.length}}</span>
              <span v-if="creator_type == 'pending'">{{pending_creators.length}}</span>
              <span v-if="creator_type == 'rejected'">{{rejected_creators.length}}</span>
            </div>
          </button>
          <div class="dropdown-menu rounded-0">
            <a class="dropdown-item pl-3" href="#" @click.prevent="fetchCreators()">
              <span class="rounded-circle bg-primary px-2 mr-2"></span> All
            </a>
            <a class="dropdown-item pl-3" href="#" @click.prevent="fetchCreators('accepted')">
              <span class="rounded-circle bg-success px-2 mr-2"></span> Accepted
            </a>
            <a class="dropdown-item pl-3" href="#" @click.prevent="fetchCreators('pending')">
              <span class="rounded-circle bg-warning px-2 mr-2"></span> Pending
            </a>
            <a class="dropdown-item pl-3" href="#" @click.prevent="fetchCreators('rejected')">
              <span class="rounded-circle bg-danger px-2 mr-2"></span> Rejected
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="row pt-4">
      <div class="col-12">
        <table class="table table-bordered">
          <thead>
            <tr class="head-text">
              <th scope="col">FullName</th>
              <th scope="col">Country</th>
              <th scope="col">Followers</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="creator in creators" :key="creator.id">
              <td class="pt-3">{{creator.first_name}} {{creator.last_name}}</td>
              <td class="pt-3">{{creator.location}}</td>
              <td class="pt-3">0</td>
              <td class="text-muted pt-3">
                <span :class="{
                    'btn btn-sm rounded-circle py-2': true,
                    'btn-primary': creator.status == 'APPLIED',
                    'btn-success': creator.status == 'ACCEPTED',
                    'btn-danger': creator.status == 'REJECTED'
                  }" style="margin-top: -6px;">
                </span>
                {{creator.status}}
              </td>
              <td>
                <button class="btn btn-primary" @click.prevent="viewCreatorDetails(creator.id)">
                  {{creator.first_name}}'s details
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <footer class="container pt-5">
          <div class="row justify-content-center">
            <div class="btn-toolbar" role="toolbar">
              <div class="btn-group" role="group">
                <button 
                  type="button" 
                  class="btn btn-outline-primary"
                  :disabled="current_page == 1">
                  <i class="fa fa-chevron-left"></i>
                </button>
                <button 
                    type="button" 
                    :class="{ 
                      'btn': true, 
                      'btn-outline-primary': page != current_page, 
                      'btn-light': page == current_page 
                    }" 
                    v-for="(page, index) in total_pages" :key="index"
                    :disabled="total_pages == 1">
                  {{page}}
                </button>
                <button 
                  type="button" 
                  class="btn btn-outline-primary"
                  :disabled="total_pages < 2">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <!-- View Details Modal -->
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content p-4">
          <user-profile :creator="current_creator" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserProfile from '@/components/UserProfile'

export default {
  name: 'users',
  components: { UserProfile },
  data() {
    return {
      creators: {},
      creator_type: 'all',
      current_creator: {},
      limit: 10,
      current_page: 1,
      total_pages: 0
    }
  },
  computed: {
    ...mapState([
      'all_creators',
      'pending_creators',
      'accepted_creators',
      'rejected_creators'
    ])
  },
  methods: {
    ...mapActions([
      'getCreators',
      'getCreatorDetails'
    ]),

    totalPages(number) {
      let value = number/this.limit
      if(parseInt(value) == 0) {
        this.total_pages = 1
      }else {
        this.total_pages = parseInt(value)
      }
    },

    async fetchCreators(type) {
      switch(type) {
        case 'accepted':
          await this.getCreators('ACCEPTED', this.limit, this.page)
          this.creators = this.accepted_creators
          this.creator_type = 'accepted'
          this.totalPages(this.accepted_creators.length)
          break
        case 'pending':
          await this.getCreators('PENDING', this.limit, this.page)
          this.creators = this.pending_creators
          this.creator_type = 'pending'
          this.totalPages(this.pending_creators.length)
          break
        case 'rejected':
          await this.getCreators('REJECTED', this.limit, this.page)
          this.creators = this.rejected_creators
          this.creator_type = 'rejected'
          this.totalPages(this.rejected_creators.length)
          break
        default:
          await this.getCreators('ALL', this.limit, this.page)
          this.creators = this.all_creators
          this.creator_type = 'all'
          this.totalPages(this.all_creators.length)
          break
      }
    },

    async viewCreatorDetails(id) {
      await this.getCreatorDetails(id)
      $(".bd-example-modal-lg").modal("show")
    }
  },
  created() {
    this.fetchCreators()
  }
}
</script>

<style scoped>
#users .btn-link:hover,
#users .btn-link:focus,
#users .btn-link:active,
#users .btn-link:after {
  text-decoration: none;
}
</style>

