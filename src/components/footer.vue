<template>
  <footer class="wk-footer">
    中科天齐-Copyright @ 2018 宁波中科天齐信息技术有限公司
  </footer>
</template>

<script>
export default {
  name: 'WkFooter'
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

.wk-footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $footerHeight;
  line-height: $footerHeight;
  text-align: center;
  color: #323334;
  background-color: #fff;
  border-top: 1px solid #323334;
}
</style>
