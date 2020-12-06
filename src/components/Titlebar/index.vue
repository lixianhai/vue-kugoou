<template>
  <div class="title-bar">
    <van-icon name="arrow-left" @click="onClickLeft" />
    <div>{{ titleBarText }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Titlebar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'titleBarText'
    ])
  },
  methods: {

    onClickLeft() {
      this.$router.go(-1)
    },

    onClickRight() {}
  }
}
</script>

<style lang="scss" scoped>
.title-bar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
  font-size: 20px;
  color: #fff;
  position: relative;
  .van-icon {
    font-size: 34px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}
</style>
