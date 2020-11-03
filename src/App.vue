<template>
  <div id="app">
    <router-view />
    <div class="yang-footer">
      <div
        v-for="item in tabArray"
        :key="item.path"
        :class="{ active: item.active }"
        class="yang-tab-item"
        @touchstart.stop="cyti(item)"
      >
        <div>{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tabArray: [{
        current: false,
        active: true,
        path: '/base',
        text: '基本组件'
      },
      {
        current: false,
        active: false,
        path: '/form',
        text: '导航'
      },
      {
        current: false,
        active: false,
        path: '/other',
        text: '其他'
      }
      ]
    }
  },
  methods: {
    cyti (item) {
      this.tabArray.forEach((v) => {
        v.active = false
        if (item.path === v.path) {
          v.active = true
          this.$router.push({
            path: v.path
          })
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

.page {
  color: #333333;
  font-size: 18px;
  margin: 10px;
}

.left-title {
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.data-text {
  line-height: 30px;
  display: block;
  width: 50px;
}

.row {
  display: flex;
}

.mr5 {
  margin-right: 5px;
}

.container {
  width: 100%;
  height: 100vh;
}

.yang-footer {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 10px 1px rgba(128, 128, 128, 0.6);
  background: #ffffff;
}

.yang-footer .yang-tab-item {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: all 0.2s linear;
}

.yang-footer .yang-tab-item:active {
  background: rgba(0, 0, 0, 0.2);
}

.yang-footer .active {
  color: #ffcc00;
}

.mr10 {
  margin-right: 10px;
}
</style>
