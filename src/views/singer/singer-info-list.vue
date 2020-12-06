<template>
  <div class="singer-info-list">
    <div class="img-wrap" :style="{backgroundImage:'url(' + info.imgurl && info.imgurl + ')'}">
      <!-- <img :src="info.imgurl && info.imgurl.replace('{size}', 400)"> -->
      <div class="name">{{ info.singername }}</div>
      <div class="num"></div>
    </div>
    <ul class="list">
      <div class="singer-player">
        <img :src="img">
        <span class="text">全部播放</span>
        <span class="num">/565首</span>
      </div>
      <li
        v-for="item in singerInfoList"
        :key="item.audio_id"
      >
        <div class="singer-name"></div>
        <div class="singer"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { singerInfoList } from '@/api/singerApi'

export default {
  name: 'SingerInfoList',
  data() {
    return {
      info: {},
      singerInfoList: [],
      img: require('@/assets/images/icon-play.png')
    }
  },
  created() {
    const { singerid } = this.$route.query
    this.getSingerInfoList(singerid)
  },
  computed: {
    background() {
      return `url(${this.info.imgurl && this.info.imgurl.replace('{size}', 400)}) no-repeat center center`
    }
  },
  methods: {
    getSingerInfoList(singerid) {
      singerInfoList(singerid).then(res => {
        this.info = res.info
        this.singerInfoList = res.songs.list
      })
    },
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrap {
  width: 100%;
  height: 240px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .name {
    position: absolute;
  }
}
.list {
  background: #fff;
  .singer-player {
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    .text {
      font-size: 22px;
    }
    .num {
      font-size: 14px;
      color: #888;
    }
  }
  li {
    margin: 10px 0;
    border-bottom: 1px solid #e5e5e5;
    .singer-name {
      font-size: 20px;
    }
    .singer {
      font-size: 18px;
      color: #888;
    }
  }
}
</style>
