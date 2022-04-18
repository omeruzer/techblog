<template>
        <section class="section single-wrapper">
            <div class="container">
                <div class="row">
                    <SinglePost/>
                    <Sidebar/>
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import SinglePost from '../components/SinglePost.vue'
    export default {
        components:{
            Sidebar,
            SinglePost
        }
    }
</script>

<style lang="scss" scoped>

</style>