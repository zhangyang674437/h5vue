<template>
<div class="page">
  <div class="left-title">开关:</div>
  <div class="components row">
    <span class="data-text mr5">{{yswitch.status1}}:</span>
    <yang-switch class="mr10" hColor="#4cd964" v-model="yswitch.status1"></yang-switch>
    <span class="data-text mr5">{{yswitch.status2}}:</span>
    <yang-switch v-model="yswitch.status2" class="mr10"></yang-switch>
    <span class="data-text mr5">禁用:</span>
    <yang-switch disabled v-model="yswitch.status3"></yang-switch>
  </div>
  <div class="left-title">滑块({{percent}}):</div>
  <div class="components row">
   <yang-slider :size="300" :percent="percent" class="level-center"></yang-slider>
  </div>
</div>
</template>

<script>
import yangSwitch from '@/components/yangSwitch'
import yangSlider from '@/components/yangSlider'
export default {
  components: {
    yangSwitch,
    yangSlider
  },
  data () {
    return {
      yswitch: {
        status1: true,
        status2: false,
        status3: false
      },
      percent: 30
    }
  }
}
</script>

<style scoped>
  .level-center{
    margin:0 auto;
  }
</style>
