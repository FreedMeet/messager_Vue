<template>
  <div>
    <div class="content-header">
      <div style="display: flex" class="channel-name">
        <h1>#{{ channelsName }}</h1>
        <img :src="starIcon" alt="star">
      </div>
      <div class="navbar">
        <div style="display: flex; align-items: center">
          <img :src="peopleIcon" alt="people">
          <span>1,093</span>
        </div>
        <div class="search-block">
          <label>
            <input type="text" placeholder="Search...">
          </label>
          <img :src="searchIcon" alt="search">
        </div>
        <div style="display: flex; align-items: center">
          <img style="margin-right: 10px;" :src="bellIcon" alt="bell">
          <img style="width: 10px" :src="dotsIcon" alt="dots">
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import starIcon from '../../assets/content/star.svg'
import peopleIcon from '../../assets/content/people.svg'
import searchIcon from '../../assets/content/search.svg'
import bellIcon from '../../assets/content/bell.svg'
import dotsIcon from '../../assets/content/dots.svg'

export default {
  name: "Header",
  props: ['channelsName'],
  data() {
    return {
      starIcon, peopleIcon, searchIcon,
      bellIcon, dotsIcon
    }
  }
}
</script>

<style scoped lang="less">
img {
  width: 20px;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.navbar{
  display: flex;
  width: 50%;
  justify-content: space-around;
  span{
    opacity: .7;
  }
}
.search-block{
  display: flex;
  border: 1px solid #d0d3d7;
  border-radius: 5px;
  img{
    position: relative;
  }
  input{
    outline: none;
    border: none;
    padding: 5px;
  }
}
hr{
  opacity: .7;
}
</style>