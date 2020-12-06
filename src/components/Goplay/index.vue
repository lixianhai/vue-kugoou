<template>
  <div class="goplay">
    <div class="content">
      <div class="left">
        <div class="img-wrap">
          <img src="http://imge.kugou.com/mcommon/400/20190906/20190906162522894877.jpg">
        </div>
        <div class="sing-info">
          <div class="singer-name">歌手</div>
          <div class="singer">夏天的风</div>
        </div>
      </div>
      <div class="button-list">
        <div v-if="isStart" class="start">
          <van-icon name="pause" />
        </div>
        <div v-else class="stop">
          <van-icon name="play" />
        </div>
        <div class="next">
          <svg-icon icon-class="skip_next" />
        </div>
        <div class="download">
          <svg-icon icon-class="download" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goplay',
  data() {
    return {
      isStart: false
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 5px;
  background: rgba(0,0,0,0.9);
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    .img-wrap {
      width: 75px;
      height: 75px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .sing-info {
      flex: 1;
      padding: 0 10px;
      .singer-name {
        width: 140px;
        font-size: 18px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .singer {
        width: 140px;
        font-size: 14px;
        color: #888888;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .button-list {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    div {
      .van-icon, .svg-icon {
        color: #fff;
        font-size: 30px;
      }
    }
    .next {
      margin-top: -2px;
      .svg-icon {
        font-size: 38px;
      }
    }
    .download {
      margin-top: -4px;
      .svg-icon {
        font-size: 28px;
      }
    }
  }
}
</style>
