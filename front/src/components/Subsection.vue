<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="row">
                    <Posts/>
                    <Sidebar/>
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Posts from './Posts.vue'
    export default {
        components:{
            Sidebar,
            Posts
        }
    }
</script>

<style lang="scss" scoped>

</style>