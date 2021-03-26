<template>
  <div class="contacts">
    <a :href='profileContacts.facebook'>
      <img :src="facebookIcons" alt=""></a>
    <a :href="profileContacts.instagram">
      <img :src="instagramIcons" alt=""></a>
    <a :href="profileContacts.twitter">
      <img :src="twitterIcons" alt=""></a>
    <a :href="profileContacts.linkedLn">
      <img :src="linkedinIcons" alt=""></a>
  </div>
</template>

<script>
import facebookIcons from '@/assets/profile/ContactsIcons/facebook.svg'
import instagramIcons from '@/assets/profile/ContactsIcons/instagram.svg'
import twitterIcons from '@/assets/profile/ContactsIcons/twitter.svg'
import linkedinIcons from '@/assets/profile/ContactsIcons/linkedin.svg'

export default {
  name: "Contacts",
  props: ['profileContacts'],
  data(){
    return{
      facebookIcons, instagramIcons,
      twitterIcons, linkedinIcons
    }
  }
}
</script>

<style scoped lang="less">
  .contacts{
    padding: 15px 0 15px 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    img{
      width: 30px;
    }
  }
</style>