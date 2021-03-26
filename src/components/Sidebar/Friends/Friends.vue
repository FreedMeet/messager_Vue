<template>
  <div class="friends">
    <div class="channel-count">
      <p>Friends</p>
      <span>{{ FriendsCountComp }}</span>
    </div>

    <div class="friends-list">
      <ul :key="friend.id" v-for="friend in friends">
        <li>
          <img alt="friend" :src="friendPhoto"/>
          <span>{{ friend.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import friendPhoto from "@/assets/sidebar/users.png";

export default {
  name: 'Friends',
  props: ['friends', 'FriendsCountComp'],
  data() {
    return {
      friendPhoto,
    };
  },
}
</script>

<style src='./Friends.less' lang="less"></style>