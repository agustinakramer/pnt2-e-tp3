<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/formulario">Formulario</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/usuarios">Usuarios</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';

#app {
  margin-top: 20px;
}
</style>
