<template>
  <div class="singer-info-list">
    <div class="img-wrap" :style="{backgroundImage: 'url('+ background +')'}">
      <!-- <img :src="info.imgurl && info.imgurl.replace('{size}', 400)"> -->
      <div class="name">{{ info.singername }}</div>
      <div class="num">2.96亿人听过</div>
      <van-icon name="arrow-left" @click="onClickLeft" />
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
        <div class="singer-name">{{ item.filename.split('-')[1] }}</div>
        <div class="singer">{{ item.filename.split('-')[0] }}</div>
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
      return this.info.imgurl && this.info.imgurl.replace('{size}', 400)
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
  background-repeat: no-repeat;
  background-position: center -40px;
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
  }
  .van-icon {
    position: absolute;
    top: 15px;
    left: 10px;
    font-size: 30px;
    color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .name {
    position: absolute;
    bottom: 50px;
    left: 15px;
    font-size: 30px;
    color: #fff;
  }
  .num {
    position: absolute;
    left: 15px;
    bottom: 25px;
    font-size: 14px;
    color: #fff;
  }
}
.list {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  margin-top: -10px;
  position: relative;
  .singer-player {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
    .text {
      font-size: 18px;
    }
    .num {
      font-size: 14px;
      color: #888;
      margin-top: 3px;
    }
  }
  li {
    margin: 0 15px;
    padding: 15px 0;
    border-bottom: 1px solid #e5e5e5;
    .singer-name {
      font-size: 18px;
    }
    .singer {
      font-size: 14px;
      color: #888;
      padding-top: 5px;
    }
  }
}
</style>
