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
      rejected: 0
    }
  },
  actions: {
    async loginAdmin({ commit }, payload) {
      try {
        let res = await Api.post('auth/login', payload)
        if(res.data.status == "success") {
          localStorage.setItem("bloverse_admin_token", res.data.data.token)
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

    async getAllCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&LIMIT=10&page=${page}`, true)
      commit("setAllCreators", res.data)
    },

    async getPendingCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&status=APPLIED&LIMIT=10&page=${page}`, true)
      commit("setPendingCreators", res.data)
    },

    async getAcceptedCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&status=ACCEPTED&LIMIT=10&page=${page}`, true)
      commit("setAcceptedCreators", res.data)
    },

    async getRejectedCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&status=REJECTED&LIMIT=10&page=${page}`, true)
      commit("setRejectedCreators", res.data)
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
    }
  },
  getters: {}
})
