import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user-store'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AccountView from '../views/AccountView.vue'
import ProfileSection from '../views/account/ProfileSection.vue'
import EditProfile from '../views/account/EditProfile.vue'
import AddSong from '../views/account/AddSong.vue'
import DeleteSong from '../views/account/DeleteSong.vue'
import AddYoutubeVideo from '../views/account/AddYoutubeVideo.vue'
import DeleteYoutubeVideo from '../views/account/DeleteYoutubeVideo.vue'
import CreatePost from '../views/account/CreatePost.vue'
import EditPost from '../views/account/EditPost.vue'
import Posts from '../views/account/PostsView.vue'
import PostById from '../views/account/PostById.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next('/account/profile/' + useUserStore().id) : next()
    },
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next('/account/profile/' + useUserStore().id) : next()
    },
    name: 'login',
    component: LoginView
  },
  {
    path: '/account',
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next('/login')
    },
    component: AccountView,
    children : [
      {
          path : 'profile',
          name : 'ProfileSection',
          component : ProfileSection 
      },
      {
        path : 'edit-profile',
        name : 'EditProfile',
        component : EditProfile 
      },
      {
        path : 'add-song',
        name : 'AddSong',
        component : AddSong 
      },
      {
        path : 'delete-song',
        name : 'DeleteSong',
        component : DeleteSong 
      },
      {
        path : 'add-youtube-video',
        name : 'AddYoutubeVideo',
        component : AddYoutubeVideo 
      },
      {
        path : 'delete-youtube-video',
        name : 'DeleteYoutubeVideo',
        component : DeleteYoutubeVideo 
      },
      {
        path : 'create-post',
        name : 'CreatePost',
        component : CreatePost 
      },
      {
        path : 'edit-post',
        name : 'EditPost',
        component : EditPost 
      },
      {
        path : 'posts',
        name : 'Posts',
        component : Posts 
      },
      {
        path : 'post-by-id',
        name : 'PostById',
        component : PostById 
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
