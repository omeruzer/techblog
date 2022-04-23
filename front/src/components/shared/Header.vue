<template>
        <header class="tech-header header">
            <div class="container-fluid">
                <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <router-link to="/"><a class="navbar-brand"><img src="/images/version/tech-logo.png" alt=""></a></router-link>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link to="/"><a class="nav-link">Home</a></router-link>
                            </li>
                            <li class="nav-item dropdown has-submenu menu-large">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                                <ul class="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                    <li>
                                        <div class="container">
                                            <div class="mega-menu-content clearfix">
                                                <div class="tab">
                                                    <li v-for="category,i in categories" :key="i">
                                                        <router-link :to="'/category/'+category._id"><button class="tablinks">{{category.title}}</button></router-link>
                                                    </li>
                                                </div>

                                                <div class="tab-details clearfix">

                                                </div><!-- end tab-details -->
                                            </div><!-- end mega-menu-content -->
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact"><a class="nav-link">Contact Us</a></router-link>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-2">
                            <li class="nav-item">
                                <router-link to="/"><a class="nav-link" ><span>Yazı Ekle </span><i class="fa fa-plus"></i></a></router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div><!-- end container-fluid -->
        </header><!-- end market-header -->
</template>

<script>
    export default {
        computed:{
            categories(){
                return this.$store.getters.getCategories
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>