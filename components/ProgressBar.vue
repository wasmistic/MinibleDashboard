<template>
    <v-container>
         <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center justify-start" style=" width:120px;"><div class="dot" :style="['background-color'? 'red' : 'color']" ></div>{{title}}</div>  <v-progress-linear height="5px" class="rounded-pill" :color="color" :value="value"></v-progress-linear>
        </div>
    </v-container>
</template>

<script>
    export default {
        name:"ProgressBar",
        props:{
            title:{
                type:String, default:'Del...'
            },
            color:{
                type:String,
            },
            value:{
                type:String, default:'55'
            }
        }
    }
</script>

<style lang="scss" scoped>
.dot{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right:1rem;
    background-color: red;
}
</style>