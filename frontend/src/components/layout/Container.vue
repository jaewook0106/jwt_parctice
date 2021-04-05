<template>
  <div>
    <div class="nav">
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'About'}">About</router-link> |
      <router-link :to="{name: 'User'}">User</router-link> |
      <router-link :to="{name: 'Chart'}">Chart</router-link> | 
      <router-link :to="{name: 'AccodionView'}">Accodion</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
