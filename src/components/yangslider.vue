<template>
<div class="yang-slider" :style="'width:'+size+'px;'" @touchmove="slide($event)" ref="slider">
    <div class="yang-circle" :style="style1" @touchstart="portability = true" @touchend="portability = false" ref="qiu"></div>
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
    data() {
        return {
            portability: false,
            lx: 0,
            style1: '',
            style2: ''
        }
    },
    mounted() {
        this.lx = this.percent * this.size / 100
        this.style1 = `left:${this.lx - 30}px`
        this.style2 = `width:${this.lx - 28}px`
    },
    methods: {
        formatNum(f, digit) {

            var m = Math.pow(10, digit);

            return parseInt(f * m, 10) / m;

        },
        cdown() {
            this.portability = true

        },
        slide(e) {
            if (this.portability) {
                document.body.style.overflow = 'hidden'
                this.lx = parseInt(e.touches[0].clientX - this.$refs.slider.getBoundingClientRect().left)
                this.style1 = `left:${this.lx}px`
                this.style2 = `width:${this.lx+2}px`

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
