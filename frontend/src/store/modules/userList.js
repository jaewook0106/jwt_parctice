import Vue from 'vue';
import Vuex from 'vuex';

import userListApi from '@/api/modules/userListApi';

Vue.use(Vuex)

const state = {
  userListData: [],
  isUser: true,
  userDetaile: ''
}

const getters = {
  getUserList: ( state ) => state.userListData,
  getIsUser: ( state ) => state.isUser,
  getUserDetaile: ( state ) => state.userDetaile
}

const mutations = {
  RESULT_USERLIST_DATA(state, payload) {
    state.userListData = payload
    if(payload.length <= 0) {
      state.isUser = false
    } else {
      state.isUser = true
    }
  },
  RESET_NO_USER(state) {
    state.isUser = true
  },
  USER_DETATILE_DATA(statem, payload) {
    console.log(payload);
    state.userDetaile = payload;
  }
}


const actions = {
  getUserListData({ commit }, context){
    console.log(context)
    userListApi.getUserListApi(context).then((response) => {
      console.log(response)
      if(response.status === 200) {
        commit('RESULT_USERLIST_DATA', response.data)
      }
      
    }).catch((err) => {
      console.log(err)
    })
  },
  resetNoUser({ commit }) {
    commit('RESET_NO_USER')
  },
  getUserDetaile({ commit }, context) {
    commit('USER_DETATILE_DATA', context)
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