<template>
  <div class="singer-info">
    <div class="title-bar">
      <van-icon name="arrow-left" @click="onClickLeft" />
      <div>{{ titleBarText }}</div>
    </div>
    <ul class="list">
      <li
        v-for="item in singerInfo"
        :key="item.singerid"
        @click="goInfoList(item)"
      >
        <div class="img-wrap">
          <img :src="item.imgurl && item.imgurl.replace('{size}', 400)">
        </div>
        <div class="name">{{ item.singername }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { singerInfo } from '@/api/singerApi'
import { mapGetters } from 'vuex'

export default {
  name: 'SingerInfo',
  data() {
    return {
      singerInfo: []
    }
  },
  computed: {
    ...mapGetters([
      'titleBarText'
    ])
  },
  created() {
    const { classid } = this.$route.query
    this.getSingerInfo(classid)
  },
  methods: {
    getSingerInfo(classid) {
      singerInfo(classid).then(res => {
        this.singerInfo = res.singers.list.info
      })
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    goInfoList(data) {
      const { singerid } = data
      this.$router.push({
        path: '/singer/info/list',
        query: { singerid }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.singer-info {
  padding-top: 60px;
}
.title-bar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  font-size: 20px;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 9;
  box-shadow: 0 2px 3px 2px#f4f4f4;
  .van-icon {
    font-size: 34px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #9e9e9e;
  }
}
.list {
  padding-left: 15px;
  li {
    min-height: 80px;
    padding: 15px 15px 15px 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    .img-wrap {
      width: 70px;
      height: 70px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      font-size: 18px;
      line-height: 26px;
      padding: 0 15px;
    }
  }
}
</style>
