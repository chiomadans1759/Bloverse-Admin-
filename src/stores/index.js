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
    rejected_creators: {}
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
      commit("setAllCreators", res.data.users)
    },

    async getPendingCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&status=APPLIED&LIMIT=10&page=${page}`, true)
      commit("setPendingCreators", res.data.users)
    },

    async getAcceptedCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&status=ACCEPTED&LIMIT=10&page=${page}`, true)
      commit("setAcceptedCreators", res.data.users)
    },

    async getRejectedCreators({ commit }, page) {
      let res = await Api.get(`users?role=CREATOR&status=REJECTED&LIMIT=10&page=${page}`, true)
      commit("setRejectedCreators", res.data.users)
    }
  },
  mutations: {
    setAllCreators(state, creators) {
      state.all_creators = creators
    },

    setPendingCreators(state, creators) {
      state.pending_creators = creators
    },

    setAcceptedCreators(state, creators) {
      state.accepted_creators = creators
    },

    setRejectedCreators(state, creators) {
      state.rejected_creators = creators
    }
  },
  getters: {}
})
