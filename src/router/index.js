import Vue from 'vue'
import Router from 'vue-router'
import DetailPage from '../views/DetailPage'
import LoginPage from '../views/LoginPage'
import config from '../../config/index'

Vue.use(Router)

const guardRoutes = (to, from, next) => {
  const loadSavedUserData = () => {
    const savedPW = localStorage.getItem('pw')
    const savedUsername = localStorage.getItem('username')
    return {pw: savedPW, username: savedUsername}
  }
  const isAuthenticated = (pw, username) => {
    const userData = config.common.user
    return pw === userData.pw && username === userData.username
  }
  const savedUser = loadSavedUserData()
  if (isAuthenticated(savedUser.pw, savedUser.username)) {
    next()
  } else {
    next('/')
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailPage,
      beforeEnter: guardRoutes
    }
  ]
})
