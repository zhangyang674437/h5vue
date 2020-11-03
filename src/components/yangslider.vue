<template>
<div class="yang-slider" :style="'width:'+size+'px;'" @touchmove="slide($event)">
  <div class="yang-circle" :style="style1"  @touchstart="portability = true" @touchend="portability = false" ref="qiu"></div>
  <div class="yang-color-bang" ref="bang" :style="style2"></div>
</div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50 // 尺寸
    },
    percent: {
      type: Number,
      default: 50 // 百分比
    }
  },
  data () {
    return {
      portability: false,
      lx: 0,
      style1: '',
      style2: ''
    }
  },
  mounted () {
    this.lx = this.percent * this.size / 100
    this.style1 = `left:${this.lx - 30}px`
    this.style2 = `width:${this.lx - 28}px`
  },
  methods: {
    cdown () {
      this.portability = true
    },
    slide (e) {
      if (this.portability) {
        if ((e.touches[0].clientX - e.target.offsetWidth - 20) >= this.size || (e.touches[0].clientX - e.target.offsetWidth) < 26) {
          return
        }
        document.body.style.overflow = 'hidden'
        this.lx = e.touches[0].clientX - e.target.offsetWidth
        this.style1 = `left:${this.lx - 30}px`
        this.style2 = `width:${this.lx - 28}px`
        // this.percent = parseInt(this.lx * 100 / this.size)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.yang-circle {
  width: 20px;
  height: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
  border-radius: 50%;
  background: white;
  position: absolute;
  left: -10px;
  transition: all .05s linear;
  top: 50%;
  margin-top: -10px;
}

.yang-slider {
  height: 8px;
  border-radius: 4px;
  background: #ebeef5;
  position: relative;
}

.yang-color-bang {
  height: 100%;
  background: #FFCC00;
  transition: all .05s linear;
  border-radius: 4px;
}
</style>
