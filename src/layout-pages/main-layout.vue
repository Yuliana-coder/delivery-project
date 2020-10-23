<template>
  <div id="app">
    <!-- <Header /> -->
    <div class="header">
      <h3>Доставка</h3>
    </div>
    <main class="main">
      <router-view></router-view>
    </main>
    <!--    <Footer />-->
  </div>
</template>

<script>

export default {
    name: 'MainLayout'
}
</script>

<style>
.header::after {
  display: block;
  content: "";
  border-bottom: 1px solid;
}
</style>
