<template>
    <div class="loginPage">
        <form class="form" @submit.prevent>
            <div class="formLine" >
                <label for="username">
                    Username
                </label>
                <input type="text" id="username" name="username" v-model="username">
            </div>
            <div class="formLine">
                <label for="pw">
                    Password
                </label>
                <input type="text" id="pw" name="pw" v-model="pw">
            </div>
            <div class="formLine">
                <button class="submitButton" @click="onLogin">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
import config from '../../config/index'
export default {
  name: 'LoginPage',
  data () {
    return {
      pw: '',
      username: ''
    }
  },
  methods: {
    loadSavedUserData () {
      const savedPW = localStorage.getItem('pw')
      const savedUsername = localStorage.getItem('username')
      return {pw: savedPW, username: savedUsername}
    },
    compareUserDataWithValues (pw, username) {
      const userData = config.common.user
      return pw === userData.pw && username === userData.username
    },
    storeUserData () {
      if (this.compareUserDataWithValues(this.pw, this.username)) {
        localStorage.setItem('pw', this.pw)
        localStorage.setItem('username', this.username)
        return this.isLoggedIn()
      } else {
        return false
      }
    },
    isLoggedIn () {
      const user = this.loadSavedUserData()
      return this.compareUserDataWithValues(user.pw, user.username)
    },
    onLogin () {
      if (this.storeUserData()) {
        this.$router.push('detail')
      }
    }
  },
  mounted () {
    if (this.isLoggedIn()) {
      this.$router.push('detail')
      // redirect
    }
  }
}
</script>
