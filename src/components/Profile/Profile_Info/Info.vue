<template>
  <p>Username:<b>{{profileInfo.userName}}</b></p>
  <p>Email: <b>{{profileInfo.email}}</b></p>
  <p>Skype: <b>{{profileInfo.skype}}</b></p>
  <p>Timezone: <b>{{profileInfo.timeZone}}</b></p>
</template>

<script>
export default {
  name: "Info",
  props: ['profileInfo']
}
</script>

<style scoped>

</style>