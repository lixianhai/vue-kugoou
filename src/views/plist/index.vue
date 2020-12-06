<template>
  <div class="plist">
    <ul class="list">
      <li
        v-for="item in plist"
        :key="item.id"
      >
        <div class="left">
          <div class="img-wrap">
            <img :src="item.imgurl.replace('{size}', 400)">
          </div>
          <div class="text">
            <div class="title">{{ item.specialname }}</div>
            <div class="play-num">
              <van-icon name="audio" />
              <span>{{ item.playcount }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <van-icon name="arrow" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { plistList } from '@/api/plistApi'

export default {
  name: 'Plist',
  data() {
    return {
      plist: []
    }
  },
  created() {
    this.getPlistList()
  },
  methods: {
    getPlistList() {
      plistList().then(res => {
        this.plist = res.plist.list.info
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
    .left {
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
       .text {
         padding: 0 15px;
         flex: 1;
         .title {
            font-size: 20px;
            line-height: 30px;
         }
         .play-num {
           font-size: 18px;
           color: #9d9d9d;
           margin-top: 5px;
           display: flex;
           align-items: center;
           .van-icon {
             margin-top: -2px;
           }
         }
       }
    }
    .right {
      .van-icon {
        width: 4%;
        text-align: right;
        font-size: 24px;
        color: #e4e4e4;
        margin-top: 4px;
      }
    }
  }
}
</style>
