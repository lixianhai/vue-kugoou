<template>
  <div class="nav-bar">
    <van-tabbar v-model="active" active-color="#ff9800" :fixed="false" route>
      <van-tabbar-item replace to="/newsong">新歌</van-tabbar-item>
      <van-tabbar-item replace to="/rank">排行</van-tabbar-item>
      <van-tabbar-item replace to="/plist">歌单</van-tabbar-item>
      <van-tabbar-item replace to="/singer">歌手</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Navber',
  data() {
    return {
      active: 'Newsong'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  overflow: hidden;
  box-shadow: 0 0 3px 4px#f4f4f4;
  /deep/.van-tabbar {
    height: 60px;
    background: #FFF;
    padding: 0 15px;
    box-sizing: border-box;
    .van-tabbar-item {
      width: 25%;
      font-size: 24px;
      box-sizing: border-box;
      color: #333333;
    }
    .van-tabbar-item--active {
      border-bottom: 4px solid #ff9800;
    }
  }
}
</style>
