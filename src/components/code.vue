<template>
  <div class="wk-content">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'WkCode',
  data () {
    return {
      msg: '代码错误展示页'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

</style>
