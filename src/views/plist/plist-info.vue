<template>
  <div class="plis-info">
    <div class="img-wrap">
      <img :src="plistInfo.imgurl && plistInfo.imgurl.replace('{size}', 400)" style="margin-top: -82px;">
    </div>
    <div class="sub-title">
      <van-collapse v-model="activeNames" :border="false">
        <van-collapse-item :title="plistInfo.intro.substr(0, 18)">{{ plistInfo.intro }}</van-collapse-item>
      </van-collapse>
    </div>
    <ul class="list">
      <li
        v-for="item in list"
        :key="item.audio_id"
      >
        <div class="name">{{ item.filename }}</div>
        <svg-icon icon-class="download" />
      </li>
    </ul>
  </div>
</template>

<script>
import { plistInfo } from '@/api/plistApi'

export default {
  name: 'PlistInfo',
  data() {
    return {
      plistInfo: [],
      list: [],
      activeNames: ['1']
    }
  },
  created() {
    const { specialid } = this.$route.query
    this.getPlistInfo(specialid)
  },
  methods: {
    getPlistInfo(specialid) {
      plistInfo(specialid).then(res => {
        this.plistInfo = res.info.list
        this.list = res.list.list.info
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrap {
  height: 250px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
.sub-title {
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 3px 2px#f4f4f4;
  padding: 10px 0 6px;
  /deep/.van-collapse-item {
    .van-cell--clickable {
      padding: 0 20px;
      .van-cell__title {
        font-size: 18px;
        border: 0;
      }
    }
    .van-cell::after {
      border: 0;
    }
    .van-collapse-item__wrapper {
      .van-collapse-item__content {
        font-size: 18px;
        color: #333;
        padding: 0 60px 10px 20px;
      }
    }
  }
}

.list {
  padding-left: 15px;
  li {
    min-height: 80px;
    padding: 20px 15px 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .name {
      font-size: 18px;
      line-height: 26px;
    }
    .svg-icon {
      width: 9%;
      font-size: 28px;
      color: #b4b4b4;
    }
  }
}
</style>
