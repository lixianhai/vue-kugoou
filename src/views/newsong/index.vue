<template>
  <div class="newsong">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <img :src="item.imgurl">
      </van-swipe-item>
    </van-swipe>
    <ul class="list">
      <li
        v-for="item in songList"
        :key="item.hash"
      >
        <div>{{ item.filename }}</div>
        <div class="download-icon">
          <svg-icon icon-class="download" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { songList } from '@/api/newsongApi'

export default {
  name: 'Newsong',
  data() {
    return {
      bannerList: [],
      songList: []
    }
  },
  created() {
    this.getSongList()
  },
  methods: {
    getSongList() {
      songList().then(res => {
        this.bannerList = res.banner
        this.songList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.newsong {
  background: #fcfcfc;
}
.my-swipe {
  height: 180px;
  margin-top: 6px;
  img {
    width: 100%;
    height: 100%;
  }
  /deep/.van-swipe__indicators {
    bottom: 5px;
    .van-swipe__indicator {
      width: 12px;
      height: 12px;
    }
  }
}
.list {
  font-size: 20px;
  color: #333333;
  padding-left: 15px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 30px 10px;
    border-bottom: 1px solid #e5e5e5;
    .download-icon {
      display: flex;
      // align-items: ;
      .svg-icon {
        font-size: 24px;
        color: #bbbbbb;
      }
    }
  }
}
</style>
