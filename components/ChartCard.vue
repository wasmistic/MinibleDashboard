<template>
<v-container>
     <div >
        <div class="d-flex align-center justify-space-between mb-8">
            <h4>Dashboard</h4>
            <v-breadcrumbs class="d-none d-sm-inline-flex" :items="items"></v-breadcrumbs>
        </div>
        <v-row>
            <v-col lg="3" sm="6" class="col-12">
                <v-card  class="pa-4" elevation="2" rounded>
                    <v-card-text class="px-0 py-0">
                        <div class="top d-flex align-center justify-space-between flex-row">
                            <div class="d-flex align-center justify-center flex-column">
                                <div class="title text-left">$ 34,152</div>
                                <div class="subtitle">Total Revenue</div>
                            </div>
                            <div class="image"><img src="/svg/svg1.svg" alt=""></div>
                        </div>
                        <div class="bottom mt-6">
                            <span style="color: #34c38f!important;"> <v-icon small color="#34c38f">mdi-arrow-up-bold</v-icon> 2.65%</span> since last week
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
             <v-col lg="3" sm="6" class="col-12">
                <v-card  class="pa-4" elevation="2" rounded>
                    <v-card-text class="px-0 py-0">
                        <div class="top d-flex align-center justify-space-between flex-row">
                            <div class="d-flex align-start justify-start flex-column">
                                <div class="title text-left ml-0">5,643</div>
                                <div class="subtitle text-left">Orders</div>
                            </div>
                            <div class="image"><img src="/svg/svg2.svg" alt=""></div>
                        </div>
                        <div class="bottom mt-6">
                            <span style="color:#f46a6a!important;"> <v-icon small color="#f46a6a">mdi-arrow-down-bold</v-icon>0.82%</span> since last week
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
             <v-col lg="3" sm="6" class="col-12">
                <v-card  class="pa-4" elevation="2" rounded>
                    <v-card-text class="px-0 py-0">
                        <div class="top d-flex align-center justify-space-between flex-row">
                            <div class="d-flex align-center justify-center flex-column">
                                <div class="title text-left">45,254</div>
                                <div class="subtitle">Customers</div>
                            </div>
                            <div class="image"><img src="/svg/svg3.svg" alt=""></div>
                        </div>
                        <div class="bottom mt-6">
                            <span style="color: #f46a6a!important;"> <v-icon small color="#f46a6a">mdi-arrow-down-bold</v-icon> 6.24%</span> since last week
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
             <v-col lg="3" sm="6" class="col-12">
                <v-card  class="pa-4" elevation="2" rounded>
                    <v-card-text class="px-0 py-0">
                        <div class="top d-flex align-center justify-space-between flex-row">
                            <div class="d-flex align-start justify-center flex-column">
                                <div class="title text-left ml-0">+ 12.58%</div>
                                <div class="subtitle">Growth</div>
                            </div>
                            <div class="image"><img src="/svg/svg4.svg" alt=""></div>
                        </div>
                        <div class="bottom mt-6">
                            <span style="color: #34c38f!important;"> <v-icon small color="#34c38f">mdi-arrow-up-bold</v-icon> 10.51%</span> since last week
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</v-container>
</template>

<script>
    export default {
        name:"ChartCard",
        data(){
            return{
                 items: [
        {
          text: 'Minible',
          disabled: false,
           href: '/Dashboar',
        },
        {
          text: 'Dashboard',
          disabled: false,
           href: '/Dashboard',
        },
      ]
            }
        }
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: auto;
}
.image{
    width: 70px;
    height: 45px;
    border: none;
}
h4{
    font-weight: 600;
    font-size: 1.125!important;
    color: #495057;
}
.v-breadcrumbs{
    color:#495057!important;
}
.title{
    font-size: 1.35rem;
    color: #495057;
    margin-left:-0.65rem;
}
.subtitle{
    color: #74788d!important;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.5;
}
.bottom{
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #74788d!important;
     margin-left:-0.25rem;
}
@media(max-width:500px){
    .wrapper{
        width: 90%;
    }
}
</style>