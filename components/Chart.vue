<template>
    <v-container>
        <v-card elevation="2" >
            <v-card-text>
                <div class="d-flex align-baseline justify-space-between mb-8">
                    <div class="title">Sales Analytics</div>
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
                <v-row justify="center mb-8">
                    <v-col sm="4" class="col-12">
                        <div class="d-flex align-baseline justify-start boder-right pr-2">
                            <h4 style="color: #5b73e8!important">$ 2,371</h4>
                            <small>Income</small>
                        </div>
                    </v-col>
                    <v-col sm="3" class="col-12">
                        <div class="d-flex align-baseline justify-start boder-right">
                            <h4 >258</h4>
                            <small>Sales</small>
                        </div>
                    </v-col>
                      <v-col sm="4" class="col-12">
                        <div class="d-flex align-baseline justify-start bo">
                            <h4> 3.6%</h4>
                            <small>Conversation Ratio</small>
                        </div>
                    </v-col>
                </v-row>
                 <v-img
                    height="340"
                    src="/svg/svg5.svg"
                    ></v-img>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name:"Chart",
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


.title{
    font-size: 1rem;
    margin: 0 0 7px;
    font-weight: 600;
}
.box{
    width: 120px;
    height: 20px;
}
h4{
    color: #495057;
    font-size: 1.575rem;
    font-weight: 500;
    line-height: 1.2;
}
small{
    font-size: 15px!important;
    color: #74788d!important;
    margin-left: 0.45rem;
}
.boder-right{
    border-right: 1px solid #95969c62;
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