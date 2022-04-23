<template>
    <div class="wrapper">
      <Header/>
        <router-view></router-view>
      <Footer/>
    </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
  export default {
    components:{
      Header,
      Footer
    },
    created() {
      this.$store.dispatch('fetchCategory')
      this.$store.dispatch('fetchArticles')
    },
    
  }
</script>

<style scoped>
</style>