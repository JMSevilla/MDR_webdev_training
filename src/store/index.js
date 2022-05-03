import Vue from 'vue'
import Vuex from 'vuex'
import client from './http-common'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userValue : null
  },
  getters: {
    get_backend : (state) => {
      return state.userValue
    }
  },
  mutations: {
    MUTATE_USERPUSH : (state, data) => {
      state.userValue = data
    }
  },
  actions: {
    PUSH_USERVALUE({commit}, {object}) {
      var data = new FormData()
      data.append('firstname', object.firstname)
      data.append('lastname', object.lastname)
      data.append('userTrigger', true)
      const request = client.HTTP().post('/api/user.php', data)
      return request.then(res => {
        console.log(res.data);
        return commit('MUTATE_USERPUSH', res.data)
      })
    }
  },
  modules: {
  }
})
