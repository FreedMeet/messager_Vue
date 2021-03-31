<template>
    <div class="contacts">
      <a v-for="contacts in profileContacts" :href='contacts.link'>
        <img :src="contacts.icons" :alt='contacts.key'>
      </a>
    </div>
</template>

<script>

export default {
  name: "Contacts",
  props: ['profileContacts'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.contacts {
  padding: 15px 0 5px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 30px;
  }
}
</style>