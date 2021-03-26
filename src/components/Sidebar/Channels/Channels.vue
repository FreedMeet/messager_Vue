<template>
  <div class="channel-list">
    <div class="channel-count">
      <p>Channels</p>
      <span>{{ CountComp }}</span>
    </div>

    <ul v-if="!isHidden">
      <li :key="channel.id" v-for="channel in allChannels">
        <router-link :to="{ path: channel.name}"
                     v-slot="{ href, route, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">
            {{ channel.name }}
          </NavLink>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Channels',
  props: ['allChannels', 'CountComp', 'isHidden'],
}
</script>

<style src='./Channels.less' lang="less"></style>