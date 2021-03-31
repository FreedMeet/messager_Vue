<template>
  <div>
    <hr>
    <div class="footer-block">
      <div style="display: flex; align-items: center" class="icons-block">
        <img :src="addIcon" alt="add">
        <img :src="microIcon" alt="micro">
      </div>
      <div class="form">
        <label>
          <input :placeholder="`Message in #${channelsName}`" />
        </label>
      </div>
      <img style="width: 24px;" :src="smileIcon" alt="smile">
    </div>
  </div>
</template>

<script>
import addIcon from '../../assets/content/Icon.svg'
import microIcon from '../../assets/content/Icon2.svg'
import smileIcon from '../../assets/content/Iconsmile.svg'

export default {
  name: "Footer",
  props: ['channelsName'],
  data() {
    return {
      microIcon, addIcon, smileIcon
    }
  }
}
</script>

<style scoped lang="less">
hr{
  opacity: .7;
}
.footer-block {
  img{
    width: 18px;
    margin-right: 10px;
    &:hover{
      opacity: 0.7;
    }
  }
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
}
.form{
  width: 90%;
  input{
    font-size: 16px;
    width: 80%;
    border: none;
    outline: none;
  }
}
</style>