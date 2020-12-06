<template>
  <div class="rank">
    <ul class="list">
      <li
        v-for="item in rankList"
        :key="item.rankid"
        @click="goRankInfo(item)"
      >
        <div class="text">
          <div class="img-wrap">
            <img :src="item.imgurl.replace('{size}', 400)">
          </div>
          <div class="title">{{ item.rankname }}</div>
        </div>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import { rankList } from '@/api/rankApi'

export default {
  name: 'Rank',
  data() {
    return {
      rankList: []
    }
  },
  created() {
    this.getRankList()
  },
  methods: {
    getRankList() {
      rankList().then(res => {
        this.rankList = res.rank.list
      })
    },

    goRankInfo(row) {
      const { rankid, rankname } = row
      this.$store.dispatch('settings/changeSetting', {
        key: 'titleBarText',
        value: rankname
      })
      this.$router.push({
        path: '/rank/info',
        query: { id: rankid }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding-left: 15px;
  li {
    padding: 15px 15px 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .text {
      display: flex;
      align-items: center;
      .img-wrap {
        width: 110px;
        height: 110px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        padding: 0 15px;
        font-size: 20px;
      }
    }
    .van-icon {
      font-size: 24px;
      color: #e4e4e4;
      margin-top: 4px;
    }
  }
}
</style>
