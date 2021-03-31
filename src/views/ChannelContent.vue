<template>
  <div>
    <div v-for="content in channelsContent">
      <div v-if="`/${content.name}` === currentUrl" class="home">

        <Header :channelsName="content.name" class="header"/>

        <div class="messages-block">
          <div v-for="message in content.channelMessages" class="message">
            <div style="display: flex">
              <img style="width: 24px; margin-right: 5px;" :src="UsersPhoto" alt="user">
              <p style="opacity: .7;">{{ message.author }}</p>
            </div>
            <span style="margin-left: 15px">{{ message.content }}</span>
          </div>
        </div>

        <Footer :channelsName="content.name" class="footer"/>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Content/Header'
import Footer from '../components/Content/Footer'
import UsersPhoto from '../assets/sidebar/users.png'

export default {
  name: "ChannelContent",
  data(){
    return{
      UsersPhoto
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    currentUrl() {
      return this.$route.path
    },
    channelsContent() {
      return this.$store.state.channelContent
    }
  }
}
</script>

<style scoped lang="less">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.message{
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 15px 15px 0 15px;
}
.messages-block {
  height: 100%;
  overflow: scroll;
}
</style>