<template>
<div class="yang-switch" :style="`background:${open?hColor:'white'}`" @click="cli" :class="{'yang-switch-open':open,'yang-switch-disable':disabled}" ref="switch">
  <div class="yang-circle"></div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    size: {
      type: Number,
      default: 50 // 尺寸
    },
    hColor: {
      type: String,
      default: '#FFCC00' // 高亮色值
    },
    open: {
      type: Boolean,
      default: false // 状态
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'open',
    event: 'on-visible-change'
  },
  mounted () {
    this.$refs.switch.style.width = this.size + 'px'
  },
  methods: {
    cli () {
      if (this.disabled) {
        console.log('禁用了')
        return false
      }
      this.$emit('on-visible-change', !this.open)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.yang-switch {
  border: 1px solid #ddd;
  border-radius: 20px;
  height: 25px;
  position: relative;
  transition: all .2s linear;
}

.yang-circle {
  width: 25px;
  height: 25px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
  border-radius: 50%;
  background: white;
  position: absolute;
  transition: all .2s linear;
  left: 0
}

/* .yang-switch-open{
    background: #FFCC00;
  } */
.yang-switch-open .yang-circle {
  left: calc(100% - 25px);
}
.yang-switch-disable{
  background: #eaecf0!important;
}
.yang-switch-disable .yang-circle{
    background: #eaecf0!important;
}
</style>
