<template>
  <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
    <div class="page-wrapper">
      <div class="blog-top clearfix">
        <h4 class="pull-left">
          <br>
          Recent News <a href="#"><i class="fa fa-rss"></i></a>
        </h4>
      </div>
      <Post v-for="article,i in articles" :key="i" :article=article />
    </div>
  </div>
  <!-- end col -->
</template>

<script>
import Post from './Post.vue'
export default {
    components:{
      Post
    },
        computed:{
            articles(){
                return this.$store.getters.getArticles
            }
        }
};
</script>

<style lang="scss" scoped>
</style>