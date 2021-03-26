<template>
  <div class="profile-header">
    <img :src="mainPhoto" alt="MainPhoto">
    <h2>{{profile.fullName}}</h2>
    <p>{{profile.status}}</p>

    <Contacts :profileContacts="profileContacts"/>
    <Info :profileInfo="profileInfo"/>
  </div>
</template>

<script>
import Contacts from "@/components/Profile/Profile_Info/Contacts";
import Info from "@/components/Profile/Profile_Info/Info";
import mainPhoto from "@/assets/profile/mainPhoto.jpg";

export default {
  name: 'Profile',
  components: {
    Contacts,
    Info
  },
  data(){
    return{
      mainPhoto
    }
  },
  computed: {
    profile(){
      return this.$store.state.Profile
    },
    profileContacts(){
      return this.profile.contacts
    },
    profileInfo(){
      return this.profile.info
    }
  }
}
</script>

<style scoped lang="less">
  img{
    padding: 0;
    width: 100%;
  }
</style>