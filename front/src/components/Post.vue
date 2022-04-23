<template>
      <div class="blog-list clearfix">
        <div class="blog-box row">
          <div class="col-md-4">
            <div class="post-media">
                <router-link :to="'/post/'+article._id">
                    <a title="">
                        <img src="upload/tech_blog_01.jpg" alt="" class="img-fluid" />
                        <div class="hovereffect"></div>
                    </a>
                </router-link>

            </div>
            <!-- end media -->
          </div>
          <!-- end col -->

          <div class="blog-meta big-meta col-md-8">
            <h4>
              <router-link :to="'/post/'+article._id"><a title="">{{article.title}}</a></router-link>
            </h4>
            <p>
              {{article.content}}
            </p>
            <router-link :to="'/'+article.category[0].slug"><small class="firstsmall"><a class="bg-orange" title="">{{article.category[0].title}}</a></small></router-link>
            <small><a >21 July, 2017</a></small>
            <small><a >{{article.author[0].name}}</a></small>
          </div>
          <!-- end meta -->
        </div>
        <!-- end blog-box -->

        <hr class="invis" />

      </div>
</template>

<script>
    export default {
        props:['article']
    }
</script>

<style lang="scss" scoped>

</style>