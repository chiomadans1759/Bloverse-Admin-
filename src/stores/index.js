import Vuex from 'vuex'
import Vue from 'vue'
import Api from '@/utils/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken:  localStorage.getItem('admin_token') ||  '',
    all_creators: {},
    pending_creators: {},
    accepted_creators: {},
    rejected_creators: {},
    total_creators: {
      all: 0,
      pending: 0,
      accepted: 0,
      rejected: 0,
      active: 0
    },
    current_creator: null
  },
  actions: {
    async loginAdmin({ commit }, payload) {
      try {
        let res = await Api.post('auth/login', payload)
        if(res.data.status == "success") {
          localStorage.setItem("bloverse_admin_token", res.data.data.token)
          localStorage.setItem("bloverse_admin_user_details", JSON.stringify(res.data.data.user))
          return res
        }else {
          let response = { status: res.status, message: res.data }
          return response
        }
      }catch(e) { 
        let response = { status: "fail", message: e }
        return response
      }
    },

    async getCreators({ commit }, status, limit, page) {
      if(status == 'ALL') {
        let res = await Api.get(`users?role=CREATOR&limit=10&page=${page}`, true)
        commit("setAllCreators", res.data)
      }else {
        let res = await Api.get(`users?role=CREATOR&status=${status}&limit=${limit}&page=${page}`, true)
        switch(status) {
          case 'ACCEPTED':
            commit("setAcceptedCreators", res.data)
          case 'PENDING':
            commit("setPendingCreators", res.data)
          case 'REJECTED':
            commit("setRejectedCreators", res.data)
          case 'ACTIVE':
            commit("setActiveCreators", res.data)
        }
      }
    },

    async getCreatorDetails({ commit }, userId) {
      let res = await Api.get(`users/${userId}`, true)
      commit("setCurrentCreator", res.data.user)
    },

    async updateUserStatus({ commit }, data) {
      let payload = { status: data.status }
      let res = await Api.put(`users/${data.id}`, payload, true)
      if(res.status == 'success') {
        commit("setCurrentCreator", res.data.user)
        return true
      }else {
        return false
      }
    },

    adminLogout({ commit }) {
      localStorage.removeItem('bloverse_admin_token')
      commit("nulifyAdminDetails")
    }
  },
  mutations: {
    setAllCreators(state, creators) {
      state.total_creators.all = creators.total
      state.all_creators = creators.users
    },

    setPendingCreators(state, creators) {
      state.total_creators.pending = creators.total
      state.pending_creators = creators.users
    },

    setAcceptedCreators(state, creators) {
      state.total_creators.accepted = creators.total
      state.accepted_creators = creators.users
    },

    setRejectedCreators(state, creators) {
      state.total_creators.rejected = creators.total
      state.rejected_creators = creators.users
    },

    setActiveCreators(state, creators) {
      state.total_creators.active = creators.total
    },

    setCurrentCreator(state, creator) {
      state.current_creator = creator
    },

    nulifyAdminDetails(state) {
      state.admin_details = {}
    }
  },
  getters: {}
})
