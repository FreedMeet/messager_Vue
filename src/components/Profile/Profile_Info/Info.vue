<template>
  <div v-for="info in profileInfo" class="info-block">
    <p>{{ info.key }}</p>
    <span>{{ info.value }}</span>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ['profileInfo']
}
</script>

<style scoped lang="less">
.info-block {
  span{
    margin-top: 5px;
    margin-left: 10px;
  }
  p {
    opacity: .7;
    margin-top: 10px;
  }
}


</style>