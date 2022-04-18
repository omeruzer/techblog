<template>
  <div class="wrapper">
    <ContactUsHeader/>

            <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="page-wrapper">
                            <div class="row">
                                <About/>
                                <ContactForm/>
                            </div>
                        </div><!-- end page-wrapper -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
  </div>
</template>

<script>
import ContactUsHeader from '../components/ContactUsHeader.vue'
import ContactForm from '../components/ContactForm.vue'
import About from '../components/About.vue'
  export default {
    components:{
      ContactUsHeader,
      About,
      ContactForm
    }
  }
</script>

<style lang="scss" scoped>

</style>