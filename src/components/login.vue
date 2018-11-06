<template>
  <div class="wk-content">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'WkLogin',
  data () {
    return {
      msg: '登录页'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

</style>
