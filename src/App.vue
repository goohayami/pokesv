<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about"
      ><img class="img" src="../src/pic/denki.png"
    /></router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
nav {
  padding: 30px;
}

.img {
  width: 15%;
  height: 15%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
