<template>
  <div>
    {{searchKeyword}}
    <div class="wrap_inp">
      <input 
        type="text" 
        class="inp_item" 
        v-model="searchKeyword"
        @click="inpSearchClick" 
      />
      <button type="button" class="btn_item" @click="searchEvent">검색하기</button>
    </div>
    <ul class="list_user" v-if="getIsUser">
      <li v-for="(item, idx) in getUserList" :key="'user'+idx">
        <router-link :to="{name:'UserDetail', params:{ id: item.name }}" class="inner_user" @click.native="userView(item)">
          <div class="wrap_thumb">
            <img :src="item.photo" alt="" class="thumb_img">
          </div>
          <div class="wrap_info">
            <dl class="dl_info">
              <dt>이름</dt>
              <dd>{{item.name}}</dd>
            </dl>
            <dl class="dl_info">
              <dt>전화번호</dt>
              <dd>{{item.tel}}</dd>
            </dl>
            <dl class="dl_info">
              <dt>주소</dt>
              <dd>{{item.address}}</dd>
            </dl>
          </div>
        </router-link>
        
      </li>
    </ul>
    <div class="no_uesr" v-if="!getIsUser">
      검색이 없습니다.
    </div>
    <button type="button" @click="promiseBtn">promise테스트</button>
  </div>
</template>

<script>

// import { mapState } from 'vuex'

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserList',
  data(){
    return {
      searchKeyword: ''
    }
  },
  computed: {
    ...mapGetters('userList', ['getUserList', 'getIsUser'])
  },
  mounted() {

  },
  methods: {
    ...mapActions('userList', ['getUserListData', 'resetNoUser', 'getUserDetaile']),
    searchEvent() {
      if(this.searchKeyword.length  > 1) {
        this.getUserListData(this.searchKeyword)
        this.searchKeyword = ''
      } else {
        alert('2글자 이상 입력해주세요')
      } 
    },
    inpSearchClick() {
      this.resetNoUser();
    },

    userView(item) {
      console.log(item)
      this.getUserDetaile(item)
    },

    testPromise() {
      const data = new Promise((resolve, reject) => {
        const test = '데이터';
        // $.get('url', (response)=>{
        //    resolve(response);
        // })
        if(test) {
          resolve(test);
        }
        reject(new Error('error message'));
      })
      return data;
    },
    // async testPromise() {
    //   const data = await $.get('url', (response)=>{})
    //   return data;
    // },
    promiseTest() {
      this.testPromise().then((response) => {
        console.log(response);
        // throw new Error('error massege2')
      }).catch((err) => {
        console.log(err)
      })
    },
    promiseBtn() {
      this.promiseTest()
    }

  },
  watch: {
    // searchKeyword(){
    //   this.getUserListData(this.searchKeyword)
    // }
  },
}
</script>

<style lang="scss" scoped>
  .inp_item{
    height:30px;
    padding:10px;
    box-sizing:border-box
  }
  .btn_item{
    width:70px;
    height:30px;
    margin-left:10px;
    cursor:pointer;
  }
  .list_user{
    margin:0 -10px;
    text-align:left;
    &::after{
      display:block;
      clear:both;
      content:''
    }
    .inner_user{
      display:block;
      border:1px solid #ddd;
      color:#666;
      text-decoration:none;
    }
    li{
      float:left;
      width:25%;
      padding:10px;
      box-sizing:border-box
    }
    .wrap_thumb{
      .thumb_img{
        width:100%
      }
    }
    .wrap_info{
      height:60px;
      padding:10px 15px;
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
  }
  .no_uesr{
    margin:50px 0;
    text-align:center
  }
</style>
