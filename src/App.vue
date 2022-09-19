<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form {
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    width: 100%;
}
.formLine {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    vertical-align: center;
    width: 50%;
    margin-bottom: 5px;
}
.formLine > :not(input) {
    width: 100%;
}
.formLine > :not(label, div) {
    display: flex;
    margin-top: 5px;
    justify-content: center;
}
.formLine > label {
  display: flex;
  justify-content: flex-start;
}
.limit {
  display: flex;
  justify-content: flex-start;
  padding-top: 5px;
}
.submitButton {
    width: 100%;
    justify-content: center;
}
</style>
