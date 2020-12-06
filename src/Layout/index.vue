<template>
  <div class="app-wrapper">
    <div class="fixed-top">
      <SearchBar />
      <Navbar v-if="isNavbar" />
      <Titlebar v-if="!isNavbar" />
    </div>
    <div class="main-container" :style="{'padding-bottom':isGoplay ? '2.09rem': '0','padding-top':isNavbar ? '3.2rem' : '1.7rem'}">
      <!-- <keep-alive :include="whiteList"> -->
      <router-view :key="key" />
      <!-- </keep-alive> -->
    </div>
    <div class="fixed-bottom">
      <Goplay v-if="isGoplay" />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Titlebar from '@/components/Titlebar'
import Navbar from '@/components/Navbar'
import Goplay from '@/components/Goplay'

export default {
  components: {
    SearchBar,
    Titlebar,
    Navbar,
    Goplay
  },
  computed: {
    key() {
      return this.$route.path
    },
    isTitle() {
      return this.$route.meta && this.$route.meta.title
    },
    whiteList() {
      return this.$route.meta && this.$route.meta.keepAlive
    },
    isNavbar() {
      console.log(this.$route)
      return this.$route.meta && this.$route.meta.isNavbar
    },
    isGoplay() {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  min-height: calc(100vh - 140px);
  // padding-top: 70px;
  .fixed-top {
    z-index: 9;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
}
.fixed-bottom {
  z-index: 9;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
