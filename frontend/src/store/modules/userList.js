import Vue from 'vue';
import Vuex from 'vuex';

import userListApi from '@/api/userListApi';

Vue.use(Vuex)

const state = {
  userListData: [],
  isUser: true
}

const getters = {
  getUserList: ( state ) => state.userListData,
  getIsUser: ( state ) => state.isUser
}

const mutations = {
  RESULT_USERLIST_DATA(state, payload) {
    state.userListData = payload
    if(payload.length <= 0) {
      state.isUser = false
    } else {
      state.isUser = true
    }
  }
}


const actions = {
  getUserListData({ commit }, context){
    console.log(context)
    userListApi.getUserListApi(context).then((response)=>{
      console.log(response)
      if(response.status === 200) {
        commit('RESULT_USERLIST_DATA', response.data)
      }
      
    }).catch((err)=>{
      console.log(err)
    })
  }
}

const namespaced = true

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced
}