<template>
  <div class="wk-content">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'WkReport',
  data () {
    return {
      msg: '报告显示页'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

</style>
