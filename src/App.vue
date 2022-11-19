<template>
  <header>
      header
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/news">news</router-link> |
        <router-link to="/product">product</router-link>

  </nav>
  </header>
  <router-view/>
  <footer>
    footer低加
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  background-color: antiquewhite;
  height: 10rem;
  nav {
    padding: 30px;
  
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
footer{
  background-color: #42b983;
  height: 10rem;
}

</style>
