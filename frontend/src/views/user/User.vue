<template>
  <div class="wrap_user">
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from '@/components/user/UserList.vue'

export default {
  name: 'User',
  components: {
    UserList
  }
}
</script>

<style lang="scss" scoped>
</style>
