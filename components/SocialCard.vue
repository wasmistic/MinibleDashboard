<template>
    <v-container>
         <v-card elevation="2" >
            <v-card-text>
                <div class="d-flex align-baseline justify-space-between mb-8">
                    <div class="title">Social Source</div>
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
                          Monthly <v-icon small class="ml-2">mdi-chevron-down</v-icon>
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
                <div class="wrap-table">
                    <v-card>
                        <v-card-text>
                            <div class="d-flex align-center justify-center flex-column">
                                <v-avatar
                                class="facebook"
                                size="56"
                                >
                                <v-icon color="#5b73e8">mdi-facebook</v-icon>
                                </v-avatar>
                                <a href="" class="facebook-text">Facebook - <span>125 sales</span> </a>
                                <p class="social-text">
                                    Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.
                                </p>
                                 <div class="box ">
                                    <v-menu
                                        tile
                                        offset-y
                                        >
                                        <template v-slot:activator="{ attrs, on }">
                                            <v-btn
                                            class="white--text btn-drop"
                                            depressed
                                            text
                                            >
                                        Learn more <v-icon small class="ml-2">mdi-chevron-right</v-icon>
                                            </v-btn>
                                        </template>
                                        </v-menu>
                                    </div> 
                            </div>
                            <v-row justify="center" class="my-6">
                                <v-col sm="4" class="col-4">
                                    <div  class="d-flex align-lg-start align-center justify-lg-start justify-center flex-column">
                                        <v-avatar
                                        class="messager"
                                        size="2rem"
                                        style="margin-inline:auto;"
                                        >
                                        <v-icon small color="#fff">mdi-facebook</v-icon>
                                        </v-avatar>
                                        <div class="icon-text">Facebook</div>
                                        <div class="icon-subtitle">125 sales</div>
                                    </div>
                                </v-col>
                                 <v-col sm="4" class="col-4">
                                    <div  class="d-flex align-lg-start align-center justify-lg-start justify-center flex-column">
                                        <v-avatar
                                        class="twitter"
                                        size="2rem"
                                         style="margin-inline:auto;"
                                        >
                                        <v-icon small color="#fff">mdi-twitter</v-icon>
                                        </v-avatar>
                                        <div class="icon-text">Twitter</div>
                                        <div class="icon-subtitle">125 sales</div>
                                    </div>
                                </v-col>
                                 <v-col sm="4" class="col-4">
                                    <div class="d-flex align-lg-start align-center justify-lg-start justify-center flex-column">
                                        <v-avatar
                                        class="instagram"
                                        size="2rem"
                                         style="margin-inline:auto;"
                                        >
                                        <v-icon small color="#fff">mdi-instagram</v-icon>
                                        </v-avatar>
                                        <div class="icon-text">Instagram</div>
                                        <div class="icon-subtitle">104 sales</div>
                                    </div>
                                </v-col>
                            </v-row>
                             <v-row justify="center" class="mt-0">
                                 <v-col sm="4" class="col-8" offset="0">
                                     <div class="box ">
                                    <v-menu
                                        tile
                                        offset-y
                                        >
                                        <template v-slot:activator="{ attrs, on }">
                                            <v-btn
                                            class="btn-drop view-text"
                                            depressed
                                            text
                                            >
                                       View All Sources <v-icon small class="ml-2">mdi-chevron-right</v-icon>
                                            </v-btn>
                                        </template>
                                        </v-menu>
                                    </div> 
                                 </v-col>
                             </v-row>
                        </v-card-text>
                    </v-card>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name:"BottomCard",
        data(){
            return{
                 btns: [
                ['Removed', '0']
                ],
            items: ['Yearly','Monthly','Weekly'],
    
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap-table{
    height: 400px;
    overflow-y: scroll;
}
.title{
    font-size:1rem!important;
    margin: 0 0 7px;
    font-weight: 600;
}
.box{
    width: 100px;
    height: 20px;
    // margin-right: 1rem;
}

.btn-drop{
    background-color: transparent!important;
    color: #74788d!important;
    text-transform:capitalize!important;;
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
.location-text{
    font-size: 13px!important;
    color: #74788d!important;
}
.name{
    font-size: 15px!important;
    white-space: nowrap;
    margin-bottom: .25rem!important;
    color: #495057;
}
.btn-table{
    color: #34c38f!important;
    background-color: rgba(52,195,143,.25)!important;
    font-size: 12px!important;
    text-transform: capitalize!important;
}

.facebook{
    align-items: center;
    background-color: #5b72e842;
}
.facebook-text{
    color: #343a40!important;
    font-size: 1.125rem;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
}
.facebook-text span{
    color: #74788d!important;
}
.social-text{
    color: #74788d!important;
    margin-top: 0.65rem;
    margin-bottom: 1rem;
    text-align: center!important;
}
.icon-text{
    font-size: 15px!important;
    color: #495057;
    margin-top: 0.95rem;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}
.icon-subtitle{
    color: #74788d!important;
    font-size: 0.75rem;
}
.btn-drop.view-text{
    color: #5b73e8!important;
    font-weight: 500;
    text-align: center!important;
    margin-top: -2.7rem;
    margin-left: -3rem;
}
.messager.twitter.instagram{
    margin-bottom: 1rem!important;
    text-align: center!important;
    border-radius: 50%!important;
}
.messager{
     background-color: #5b73e8;
}
.twitter{
    background-color: #0dcaf0!important;
}
.instagram{
    background-color: #e83e8c!important;
}
@media(max-width:1024px){
    .btn-drop.view-text{
    margin-left:-4.5rem!important;
}
}

@media(max-width:900px){
    .btn-drop.view-text{
    margin-left:0rem!important;
}
}

@media(max-width:500px){
    .btn-drop.view-text{
    margin-left:-1rem!important;
}
}
</style>