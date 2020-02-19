<template>
  <div class="user_detail">
    <div class="wrap_thumb">
      <img :src="userItem.photo" alt="" class="thumb_img">
    </div>
    <div class="wrap_info">
      <dl class="dl_info">
        <dt>이름</dt>
        <dd>{{userItem.name}}</dd>
      </dl>
      <dl class="dl_info">
        <dt>전화번호</dt>
        <dd>{{userItem.tel}}</dd>
      </dl>
      <dl class="dl_info">
        <dt>주소</dt>
        <dd>{{userItem.address}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserView',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters('userList',['getUserDetaile']),
    userItem(){
      const data = this.getUserDetaile
      return data
    }
  },

}
</script>

<style lang="scss" scoped>
  .user_detail{
    text-align:left    
  }
  .wrap_thumb{
    float:left;
    width:200px;
    margin-right:20px;
    .thumb_img{
      width:100%;
    }
  }
  .wrap_info{
    overflow:hidden;
  }
  .dl_info{
    
    font-size:14px;
    &::after{
      display:block;
      clear:both;
      content:''
    }
    dt{
      float:left;
      width:70px;
      font-weight:bold
    }
    dd{
      overflow:hidden;
    }
  }
</style>
