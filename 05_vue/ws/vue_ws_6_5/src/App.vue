<template>
  <div id="app">
    <div class="left">
      <router-link to="/"><h2>모든</h2></router-link>
      <router-link to="/today"><h2>오늘</h2></router-link>
      <router-link to="/important"><h2>중요</h2></router-link>
    </div>
    <router-view class="right"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}

.left {
  width: 300px;
  height: 800px;
  border: solid 1px black;
  border-radius: 5px;
  margin: 5px;
}

.left a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.left a.router-link-exact-active {
  color: #42b983;
}

.right {
  width: 600px;
  height: 800px;
  border: solid 1px black;
  border-radius: 5px;
  margin: 5px;
  padding: 0 20px;
}

.right > h1 {
  text-align: left;
}
</style>
