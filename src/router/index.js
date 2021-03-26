import { createRouter, createWebHistory } from 'vue-router'
import Content from '@/views/Content.vue'
import ChannelContent from "@/views/ChannelContent";

const routes = [
  {
    path: '/',
    name: 'Content',
    component: Content
  },
  {
    path: '/:channelName',
    name: 'ChannelContent',
    component: ChannelContent
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
