<template>
  <div class="app-wrapper">
    <LoadingPage v-show="isLoading" />
    <div class="fixed-top">
      <SearchBar v-if="isSearchBar" />
      <Navbar v-if="isNavbar" />
      <Titlebar v-if="isTitle" />
    </div>
    <div class="main-container" :style="{'padding-bottom':paddingBottom,'padding-top':paddingTop}">
      <router-view :key="key" />
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
import LoadingPage from '@/components/LoadingPage'

import { mapGetters } from 'vuex'

export default {
  components: {
    SearchBar,
    Titlebar,
    Navbar,
    Goplay,
    LoadingPage
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ]),
    key() {
      return this.$route.path
    },
    isSearchBar() {
      return this.$route.meta && this.$route.meta.isSearchBar
    },
    isTitle() {
      return this.$route.meta && this.$route.meta.isTitle
    },
    whiteList() {
      return this.$route.meta && this.$route.meta.keepAlive
    },
    isNavbar() {
      return this.$route.meta && this.$route.meta.isNavbar
    },
    isGoplay() {
      return true
    },
    paddingTop() {
      if (this.isSearchBar) {
        if (this.isNavbar) {
          return '3.2rem'
        } else {
          return '1.7rem'
        }
      } else {
        if (this.isTitle) {
          return '1.5rem'
        } else {
          return '0'
        }
      }
    },
    paddingBottom() {
      if (this.isGoplay) {
        return '2.09rem'
      } else {
        return '0'
      }
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
