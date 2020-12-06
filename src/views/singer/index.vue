<template>
  <div class="singer">
    <ul class="list">
      <li
        v-for="item in singerList"
        :key="item.classid"
        :style="{'margin-top':item.ismargin ? '20px': '0'}"
      >
        <div>{{ item.classname }}</div>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import { singerList } from '@/api/singerApi'

export default {
  name: 'Singer',
  data() {
    return {
      singerList: [],
      nameList: []
    }
  },
  created() {
    this.getSingerList()
  },
  methods: {
    getSingerList() {
      singerList().then(res => {
        this.singerList = res.list.map(item => {
          const name = item.classname.substr(0, 2)
          if (this.nameList.length && this.nameList.indexOf(name) === -1) {
            item.ismargin = true
          }
          this.nameList.push(name)
          return item
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 15px;
  li {
    font-size: 20px;
    padding: 15px;
    border: 1px solid #e4e4e4;
    border-bottom: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fbfbfb;
    &:nth-child(1) {
      border-bottom: 1px solid #e4e4e4;
    }
    &:nth-child(4) {
      border-bottom: 1px solid #e4e4e4;
    }
    &:nth-child(7) {
      border-bottom: 1px solid #e4e4e4;
    }
    &:last-child {
      border-bottom: 1px solid #e4e4e4;
    }
    .van-icon {
      font-size: 24px;
      color: #e4e4e4;
      margin-top: 4px;
    }
  }
}
</style>
