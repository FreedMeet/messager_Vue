<template>
  <div class="profile-header">
    <img :src="mainPhoto" alt="MainPhoto">
    <div class="profile-info">
      <h2 :class="{active: profile.isActive}">{{ profile.fullName }}</h2>
      <p>{{ profile.status }}</p>
      <Contacts :profileContacts="profileContacts"/>
      <Info :profileInfo="profileInfo"/>
    </div>
  </div>
</template>

<script>
import Contacts from "../Profile/Profile_Info/Contacts";
import Info from "../Profile/Profile_Info/Info";
import mainPhoto from "../../assets/profile/mainPhoto.jpg";

export default {
  name: 'Profile',
  components: {
    Contacts,
    Info
  },
  data() {
    return {
      mainPhoto
    }
  },
  computed: {
    profile() {
      return this.$store.state.Profile
    },
    profileContacts() {
      return this.profile.contacts
    },
    profileInfo() {
      return this.profile.info
    }
  }
}
</script>

<style scoped lang="less">
.profile-info {
  padding: 10px 20px 0 20px;

  .active {
    display: flex;
    align-items: center;

    &::after {
      content: ' \1F7E2';
      margin-left: 5px;
      font-size: 10px;
    }
  }

  p {
    opacity: .7;
    margin-left: 10px;
  }
}

img {
  padding: 0;
  width: 100%;
}
</style>