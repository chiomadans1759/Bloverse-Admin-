import axios from 'axios'
import store from "@/stores"

let API_URL = process.env.VUE_APP_API

class Api {
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Token ${localStorage.getItem('bloverse_admin_token')}`
        }
      }
      let response = requireAuth ? await axios.get(API_URL + url, config) : await axios.get(API_URL + url)
      return response.data
    } catch (error) { 
      return error
    }
  }

  static async post(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Token ${localStorage.getItem('bloverse_admin_token')}`
        }
      }
      let response = requireAuth ? await axios.post(API_URL + url, payload, config) : await axios.post(API_URL + url, payload)
      return response
    } catch (error) { 
      return error
    }
  }

  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Token ${localStorage.getItem('bloverse_admin_token')}`
        }
      }
      let response = requireAuth ? await axios.put(API_URL + url, payload, config) : await axios.put(API_URL + url, payload)
      return response
    } catch (error) { 
      return error
    }
  }
}

export default Api
