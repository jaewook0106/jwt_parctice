<template>
  <div class="list_accodion">
    <a href="javascript:void(0);" class="btn_accodion" @click="clickAccodion">
      <div class="tit_accodion">
        <strong class="tit_item">{{title}}</strong>
      </div>
    </a>
    <transition
      name="accodian"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="content_accodion" v-show="visibled">
        <slot name="accodion-content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'AccodionItem',
  props: {
    title: {
      type : String,
      default : ''
    }
  },
  inject: ['accodionData'],
  data(){
    return {
      index: null
    }
  },
  created() {
    this.index = this.accodionData.count++;
  },
  computed: {
    visibled() {
      if(this.accodionData.active) {
        return this.accodionData.active.indexOf(this.index) > -1
        // if(this.accodionData.active.length > 1) {
          
        // } 
      }
      return false
    }
  },
  methods: {
    start(el) {
      this.$nextTick(()=>{
        el.style.height = (el.scrollHeight - 20) + "px";
        console.log('asdasds', el.style.height)
      })
    },
    end(el) {
      el.style.height = "";
    },
    clickAccodion() {
      console.log(this.index);
      // const { multiple } = this.accodionData;
      // if(!this.visibled) {
      //   if(multiple) {
      //     this.visibled = true;
      //   } else {
      //     this.visibled = true;
      //   }
      // } else { 
      //   this.visibled = false;
      // }

      
    }
  },
  
}
</script>

<style lang="scss" scope>

  .accodian-enter-active,
  .accodian-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }

  .accodian-enter,
  .accodian-leave-to {
    height: 0 !important;
    opacity: 0.5;
  }
</style>