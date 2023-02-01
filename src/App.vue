<template>
        <Header></Header>

          <HeaderNavBar></HeaderNavBar>

        <div class="container">
          <router-view />
        </div>

        <Footer></Footer>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import HeaderNavBar from "./components/layouts/HeaderNavBar.vue";
import Footer from "./components/layouts/Footer.vue";

export default {
  components:{
    Header,
    HeaderNavBar,
    Footer
  }
}

</script>

<style lang="scss">
  @import "./styles/style.scss";
</style>