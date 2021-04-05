import Vue from 'vue'
import Vuex from 'vuex'

const modules = {};
const requireModule = require.context('./modules', false, /\.js$/);
// 모듈 자동 생성
console.log(requireModule('./userList.js'))
requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  const moduleName = fileName.replace(/(\.\/|\.js)/gi, '');
  modules[moduleName] = {
    ...requireModule(fileName).default
  }
})


Vue.use(Vuex)

const store = new Vuex.Store({
  modules
})


export default store;
