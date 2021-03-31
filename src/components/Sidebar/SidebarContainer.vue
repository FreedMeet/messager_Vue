<template>
  <div class="channel">
    <div class="channel-header">
      <h2
          :class="{active: isHidden}"
          v-on:click="isHidden = !isHidden">Nomad List</h2>
      <img alt="settings" :src="settingsLogo"/>
    </div>

    <div class="channel-tags">
      <div class="channel-treads">
        <img alt="chat" :src="chatLogo"/>
        <label>
          <input type="text" v-model="search" placeholder="All treads"/>
        </label>
      </div>

      <Channels
          :isHidden="isHidden"
          :all-channels="filteredList"
          :CountComp='CountComp'
      />
      <Friends
          :friends="friends"
          :FriendsCountComp='FriendsCountComp'
      />
    </div>
  </div>
</template>

<script>
import Channels from "./Channels/Channels";
import Friends from "./Friends/Friends";

import chatLogo from "@/assets/sidebar/chat.svg";
import settingsLogo from "@/assets/sidebar/settings.svg";

export default {
  name: "Sidebar",
  components: {
    Channels,
    Friends
  },
  data() {
    return {
      chatLogo,
      settingsLogo,
      isHidden: false,
      search: ''
    };
  },
  computed: {
    channels() {
      return this.$store.state.channelContent
    },
    friends() {
      return this.$store.state.Sidebar.friends
    },
    CountComp() {
      return this.channels.length;
    },
    FriendsCountComp() {
      return this.friends.length
    },
    filteredList() {
      return this.channels.filter(channel => {
        return channel.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
};
</script>

<style src='./Sidebar.less' lang="less"></style>
