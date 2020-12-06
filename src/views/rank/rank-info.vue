<template>
  <div class="rank-info">
    <div class="img-wrap">
      <img :src="rankInfo.banner7url && rankInfo.banner7url.replace('{size}', 400)" style="margin-top: -82px;">
      <div class="update-time">
        <span>上次更新时间：{{ getDae }}</span>
      </div>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in rankInfoList"
        :key="item.audio_id"
      >
        <div class="left">
          <div class="num">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="name">{{ item.filename }}</div>
        </div>
        <svg-icon icon-class="download" />
      </li>
    </ul>
  </div>
</template>

<script>
import { rankInfo } from '@/api/rankApi'

export default {
  name: 'RankInfo',
  data() {
    return {
      rankInfo: {},
      rankInfoList: []
    }
  },
  computed: {
    getDae() {
      const date = new Date()
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  },
  created() {
    const { id } = this.$route.query
    this.getRankInfo(id)
  },
  methods: {
    getRankInfo(id) {
      rankInfo(id).then(res => {
        this.rankInfo = res.info
        console.log(this.rankInfo.banner7url.replace(), 'banner7url')
        this.rankInfoList = res.songs.list
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
  .update-time {
    width: 100%;
    height: 56px;
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;
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
    &:nth-child(1) {
      .num {
        span {
          color: #fff;
          background: #e80000;
        }
      }
    }
    &:nth-child(2) {
      .num {
        span {
          color: #fff;
          background: #ff7200;
        }
      }
    }
    &:nth-child(3) {
      .num {
        span {
          color: #fff;
          background: #f8b300;
        }
      }
    }
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      .num {
        padding: 0 10px;
        font-size: 16px;
        color: #999;
        span {
          padding: 3px 10px;
          border-radius: 10px;
        }
      }
      .name {
        padding: 0 10px;
        font-size: 18px;
        line-height: 26px;
      }
    }
    .svg-icon {
      width: 9%;
      font-size: 28px;
      color: #b4b4b4;
    }
  }
}
</style>
