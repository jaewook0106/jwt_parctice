<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'Accodion',
  components:{
    
  },
  props: {
    value: null,
    multiple: {
      type : Boolean,
      default: false
    },
  },
  data(){
    return {
      accodionData: {
        multiple: this.multiple,
        accodionIndex: this.value,
        active: null,
        count: 0,
        listeners: {
          click: this.clickAccodion
        }
      }
    }
  },
  provide() {
    return {
      accodionData: this.accodionData
    }
  },
  mounted() {
    if(this.value) {
      this.accodionData.active = [...this.value];
      console.log('this.accodionData.activ', this.accodionData.active)
    }
    
  },
  watch: {
    value(val) {
      console.log(val);
      this.accodionData.active = [...val];
    }
  },
  methods: {
    clickAccodion(idx) {
      this.$emit('input', idx)
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
