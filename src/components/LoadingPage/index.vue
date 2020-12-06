<template>
  <div class="loading-page">
    <ul>
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  ul {
    overflow: hidden;
    animation: rotation 1s infinite;
    width: 30px;
    height: 30px;
    position: relative;
    li {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      &:nth-child(1) {
        left: 0;
        background-color: #5C6BC0;
        animation: loading1 0.5s ease 0s infinite alternate;
      }
      &:nth-child(2) {
        right: 0;
        background-color: #8BC34A;
        animation: loading2 0.5s ease 0s infinite alternate;
      }
      &:nth-child(3) {
        bottom: 0;
        background-color: #FFB74D;
        animation: loading3 0.5s ease 0s infinite alternate;
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
        background-color: #F44336;
        animation: loading4 0.5s ease 0s infinite alternate;
      }
    }
  }
}

@keyframes rotation{
  0%{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading1{
  0%{
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100%{
    -webkit-transform: translate(20px, 20px);
    transform: translate(20px, 20px);
  }
}

@keyframes loading2{
  0%{
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100%{
    -webkit-transform: translate(-20px, 20px);
    transform: translate(-20px, 20px);
  }
}

@keyframes loading3{
  0%{
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100%{
    -webkit-transform: translate(20px, -20px);
    transform: translate(20px, -20px);
  }
}

@keyframes loading4{
  0%{
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100%{
    -webkit-transform: translate(-20px, -20px);
    transform: translate(-20px, -20px);
  }
}
</style>
