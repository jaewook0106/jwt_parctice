<template>
  <div>
    <button type="button" @click="resetData">초기화</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name:'UserTest',
  data(){
    return{
      list: []
    }
  },
  computed: {

  },
  methods: {
    ...mapActions('userList', ['resetUserData']),
    resetData() {
      this.resetUserData();
    }
  },
}
</script>

<style>

</style>
