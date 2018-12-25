<template>
  <div class="et-content">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'EtMain',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~static/styles/common";

</style>
