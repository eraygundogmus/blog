import { createRouter, createWebHashHistory } from 'vue-router'

const About = import('@/views/About.vue')
const Blog = import('@/views/Blog.vue')
const Bookmarks = import('@/views/Bookmarks.vue')
// const Home = import('@/views/Home.vue')
const Article = import('@/views/Article.vue')

const routes: Array<any> = [
  {
    path: '/about',
    name: 'About',
    component: () => About,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => Blog,
  },
  {
    path: '/blog/:slug',
    name: 'BlogPage',
    component: () => Article,
  },
  {
    path: '',
    name: 'Home',
    component: () => About,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => Bookmarks,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
