<template>
  <div class="wrapper">
    <Sidebar class="sidebar" />
    <div>
      <ul :key="channel.id" v-for="channel in channels">
        <li>{{ channel.name }}</li>
      </ul>
    </div>
    <router-view class="content" />
    <Profile class="profile" />
  </div>
</template>

<script>
import Sidebar from "../src/components/Sidebar/SidebarContainer";
import Profile from "../src/components/Profile/Profile";
import {store} from "../src/store/index";

export default {
  name: "App",
  store,
  components: {
    Sidebar,
    Profile,
  },
};
</script>

<style lang='less' src='./main.less'></style>


