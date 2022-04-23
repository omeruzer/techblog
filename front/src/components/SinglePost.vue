<template>
    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
        <div class="page-wrapper">
            <div class="blog-title-area text-center">
                <ol class="breadcrumb hidden-xs-down">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">{{post.article[0].category[0].title}}</a></li>
                    <li class="breadcrumb-item active">{{post.article[0].title}}</li>
                </ol>

                <span class="color-orange"><a href="tech-category-01.html" title="">{{post.article[0].category[0].title}}</a></span>

                <h3>{{post.article[0].title}}</h3>

                <div class="blog-meta big-meta">
                    <small><a href="tech-single.html" title="">{{post.article[0].date ? post.article[0].date : 'Bilinmiyor '}}</a></small>
                    <small><a href="tech-author.html" title="">{{post.article[0].author[0].name}}</a></small>
                </div><!-- end meta -->

            </div><!-- end title -->

            <div class="single-post-media">
                <img src="/upload/tech_menu_08.jpg" alt="" class="img-fluid">
            </div><!-- end media -->

            <div class="blog-content">  
                <div class="pp">
                    {{post.article[0].content}}
                </div>
            </div><!-- end content -->

            <hr class="invis1">

            <div class="custombox clearfix">
                <h4 class="small-title">You may also like</h4>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="blog-box">
                            <div class="post-media">
                                <a href="tech-single.html" title="">
                                    <img src="/upload/tech_menu_04.jpg" alt="" class="img-fluid">
                                    <div class="hovereffect">
                                        <span class=""></span>
                                    </div><!-- end hover -->
                                </a>
                            </div><!-- end media -->
                            <div class="blog-meta">
                                <h4><a href="tech-single.html" title="">We are guests of ABC Design Studio</a></h4>
                                <small><a href="blog-category-01.html" title="">Trends</a></small>
                                <small><a href="blog-category-01.html" title="">21 July, 2017</a></small>
                            </div><!-- end meta -->
                        </div><!-- end blog-box -->
                    </div><!-- end col -->

                    <div class="col-lg-6">
                        <div class="blog-box">
                            <div class="post-media">
                                <a href="tech-single.html" title="">
                                    <img src="/upload/tech_menu_06.jpg" alt="" class="img-fluid">
                                    <div class="hovereffect">
                                        <span class=""></span>
                                    </div><!-- end hover -->
                                </a>
                            </div><!-- end media -->
                            <div class="blog-meta">
                                <h4><a href="tech-single.html" title="">Nostalgia at work with family</a></h4>
                                <small><a href="blog-category-01.html" title="">News</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div><!-- end meta -->
                        </div><!-- end blog-box -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end custom-box -->

            <hr class="invis1">
        </div><!-- end page-wrapper -->
    </div><!-- end col -->
</template>

<script>
    export default {
        props:[
            'post'
        ],
        created() {
            console.log(this.post.article);
        },
    }
</script>

<style lang="scss" scoped>

</style>