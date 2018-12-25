<template>
  <header class="et-header"></header>
</template>

<script>
export default {
  name: 'EtHeader'
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

.et-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: $headerHeight;
  background-color: #323334;
}
</style>
