import Vuex from 'vuex'
import Vue from 'vue'
import Api from '@/utils/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin_token: {},
    accessToken:  localStorage.getItem('admin_token') ||  ''
  },
  actions: {
    async loginAdmin({ commit }, payload) {
      
      try {
        let res = await Api.post('auth/login', payload)
        if(res.status == "success") {
          localStorage.setItem("bloverse_admin_token", res.data.token)
          commit("setAdmin", res.data.token) 
        }else {
          let response = { status: res.status, message: res.data }
          return response
        }
        return res
      }catch(e) { 
        let response = { status: "fail", message: e }
        return response
      }
    },

  },
  mutations: {
    setAdmin(state, token) {
      state.admin_token = token
    }
  },
  getters: {}
})
