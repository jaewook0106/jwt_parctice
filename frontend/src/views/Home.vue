<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <UserList></UserList>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: {
    UserList
  }
}
</script>
