<template>
  <div class="search-bar">
    <div>热爱音乐，享受生活</div>
    <div>
      <svg-icon icon-class="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;
  font-size: 24px;
  font-weight: bold;
  background: #2ca2f9;
  color: #fff;
  .svg-icon {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
