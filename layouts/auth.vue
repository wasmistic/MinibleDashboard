<template>
  <div>
      <div class="se-pre-con" ref="preloader"></div>
      <AppHeader/>
         <section   :class="classMonitor.top">
            <div :class="classMonitor.down">
                <div class="left item">
                
                </div>

                <nuxt/>
            </div>
         </section>
  </div>
</template>

<script>
    export default {
        head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
        auth:false,
        computed:{
            classMonitor(){
                if(this.$route.path=='/register'){
                    return {top:'signup',down:'signup-container'}
                }
                return {top:'login',down:'login-container'};
            },
           
        }
    }
</script>

<style lang="scss" scoped>;
</style>