<template>
  <div class="wk-content">
    {{ msg }}
    <ul>
      <li><router-link :to="{ name: 'report'}">报告显示页</router-link></li>
      <li><router-link :to="{ name: 'detail'}">详细报告列表页</router-link></li>
      <li><router-link :to="{ name: 'code'}">代码错误展示页</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WkList',
  data () {
    return {
      msg: '列表信息页'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

</style>
