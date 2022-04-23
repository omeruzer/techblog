<template>
        <section class="section single-wrapper">
            <div class="container">
                <div class="row">
                    <SinglePost v-if="$store.state.article.loaded" :post='post'/>
                    <Sidebar/>
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import SinglePost from '../components/SinglePost.vue'
    export default {
        data() {
            return {
                post: this.$store.state.article
            }
        },
        async created() {
            await this.$store.dispatch('fetchArticle',this.$route.params.id)
            console.log(this.$store.state.article.loaded);
        },
        components:{
            Sidebar,
            SinglePost
        },
    }
</script>

<style lang="scss" scoped>

</style>