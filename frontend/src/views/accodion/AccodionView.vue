<template>
  <div>
    <h3>아코디언 입니다.</h3>
    <accodion class="accodion_g" v-model="accodionIndex" :multiple="false">
      <accodion-item v-for="item in accodionData" :key="'accodion' + item.index" :title="item.title">
        <template slot="accodion-content">
           <div class="">
             <div>
              {{item.content}}
              </div>
              <div>
              {{item.content}}
              </div>
          </div>
        </template> 
      </accodion-item>
    </accodion>
  </div>
</template>

<script>
  import Accodion from '@/components/accodion/Accodion';
  import AccodionItem from '@/components/accodion/AccodionItem';

  export default {
    name: 'AccodionView',
    components: {
      Accodion,
      AccodionItem
    },
    data() {
      return {
        
        accodionData: [
          {
            index: 0,
            title: '아코디언 타이틀 원',
            content:'내용 원'
          },
          {
            index: 1,
            title: '아코디언 타이틀 투',
            content:'내용 투'
          },
          {
            index: 2,
            title: '아코디언 타이틀 쓰리',
            content:'내용 쓰리'
          }
        ],
         accodionIndex: [0]
      }
     
    }
  }
</script>
<style lang="scss" scope>

 
</style>