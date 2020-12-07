<template>
  <div class="search">
    <div class="title-bar">
      <van-icon name="arrow-left" @click="onClickLeft" />
      <div>搜索</div>
    </div>
    <form action="/">
      <div class="search-input">
        <van-search
          v-model="value"
          placeholder="歌手/歌名/拼音"
        />
        <div class="but" @click="search">搜索</div>
      </div>
    </form>
    <div class="hot-text">最近热门</div>
    <ul class="hot-list">
      <li></li>
    </ul>
  </div>
</template>

<script>
import { hotList } from '@/api/searchApi'

export default {
  name: 'Search',
  data() {
    return {
      value: '',
      hotList: []
    }
  },
  created() {
    this.getHotList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

    getHotList() {
      hotList().then(res => {
        // this.hotList = res.
      })
    },

    search() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
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
.search-input {
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /deep/.van-search {
    height: 60px;
    flex: 1;
    .van-search__content {
      height: 100%;
      border: 1px solid #e5e5e5;
      background: #fff;
      border-radius: 6px;
      .van-cell {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .van-icon {
        font-size: 22px;
        font-weight: bold;
        color: #c7c7c7;
      }
    }
    .van-search__action {
      width: 80px;
      text-align: center;
      background: #2ba2fa;
      color: #fff;
      border-radius: 6px;
      margin-left: 10px;
      font-size: 20px;
    }
  }
  .but {
    width: 70px;
    height: 40px; 
    line-height: 40px;
    text-align: center;
    background: #2ba2fa;
    font-size: 20px;
    color: #fff;
    border-radius: 6px;
  }
}

</style>
