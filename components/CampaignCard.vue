<template>
    <v-container>
        <v-card elevation="2" class="top-card px-1 mb-6">
            <v-card-text>
                <div>
                    <v-row class="align-center justify-space-between">
                        <v-col sm="8" class="col-12 mb-8 mb-sm-0">
                        <p>Enhance your <strong style="color:#fff!important;">Campaign</strong> for better outreach <span> <v-icon small color="#fff">mdi-arrow-right</v-icon> </span> </p>
                        <v-btn depressed small class="btn-success">Upgrade your Account!</v-btn>
                        </v-col>
                         <v-col sm="4" class="col-12 mt-8 mt-sm-0">
                         <v-img
                            src="/svg/svg7.svg"
                            ></v-img>
                        </v-col>
                    </v-row>
                    <div>
                       
                    </div>
                </div>
            </v-card-text>
        </v-card>
        <v-card elevation="2"  class="py-3">
            <v-card-text>
                <div class="d-flex align-baseline justify-space-between mb-8">
                    <div class="title">Top Selling Products</div>
                     <div class="box ">
                     <v-menu
                        tile
                        offset-y
                        >
                        <template v-slot:activator="{ attrs, on }">
                            <v-btn
                            class="white--text btn-drop"
                            v-bind="attrs"
                            v-on="on"
                            depressed
                            text
                            >
                            Sort By... <v-icon small class="ml-2">mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item
                            v-for="item in items"
                            :key="item"
                            link
                            >
                            <v-list-item-title class="drop-text" v-text="item"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </div> 
                </div>
                <div class="wrapper">
                    <ProgressBar color="primary" />
                    <ProgressBar value="40" title="iPh..." color="cyan" />
                    <ProgressBar value="45" title="An..." color="green" />
                    <ProgressBar value="80" title="Ta..." color="orange" />
                     <ProgressBar value="70" title="Ca..." color="purple" />
                </div>
               
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue'
    export default {
        name:"CampaignCard",
        components:{ProgressBar},
            data(){
            return{
                    btns: [
                    ['Removed', '0']
                    ],
                    items: ['Monthly','Yearly','Weekly'],
                    }
            }
    }
</script>

<style lang="scss" scoped>
.wrapper{
    margin-top:-1.6rem;
}
.btn-success {
    color: #fff!important;
    background-color: #34c38f!important;
    border-color: #34c38f!important;
    text-transform: capitalize!important;
    transition: color 0.5s ease-in-out
                background-color 0.5s ease-in-out;
}
.btn-success:hover{
     background-color: #169969!important;
    color: #fff!important;
}
.top-card{
    background-color: #5b73e8;
}
p{
    font-size: 18px!important;
    color: #fff!important;
    line-height: 1.6;
    word-wrap: break-word;
}



.title{
    font-size:1rem!important;
    margin: 0 0 7px;
    font-weight: 600;
}
.box{
    width: 110px;
    height: 20px;
}

.point{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right:0.65rem;
    background-color: red;
}
.btn-drop{
    background-color: transparent!important;
    color: #74788d!important;
    text-transform: capitalize!important;
}
.btn-drop:hover{
    background-color: transparent!important;
    color: #74788d!important;
}
.drop-text{
    font-size:1rem!important;
    color: #000!important;
    font-weight: 400;
}
</style>