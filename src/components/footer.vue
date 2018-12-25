<template>
  <footer class="et-footer">
  </footer>
</template>

<script>
export default {
  name: 'EtFooter'
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

.et-footer {
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
