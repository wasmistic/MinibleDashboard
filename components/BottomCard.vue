<template>
    <v-container>
         <v-card elevation="2" >
            <v-card-text>
                <div class="d-flex align-baseline justify-space-between mb-8">
                    <div class="title">Top Users</div>
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
                            All Members <v-icon small class="ml-2">mdi-chevron-down</v-icon>
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
                    <v-divider></v-divider>
                     <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-0"
                        dense
                        title=""
                        hide-default-header
                         hide-default-footer
                    >
                    <template v-slot:item.img="{ item }" >
                            <v-avatar
                            color="primary"
                            size="40"
                            >
                            <img src="/svg/avatar-2.jpg" alt="">
                            </v-avatar>
                        </template>
                         <template v-slot:item.name="{ item }" >
                            <div class="d-flex align-start justify-start flex-column mt-4">
                                <h4 class="name">Glenn Holden</h4>
                                <p class="location-text"> <v-icon small class="d-inline-block mr-2" color="#74788d">mdi-map-marker</v-icon> Nevada</p>
                            </div>
                        </template>
                        <template v-slot:item.button="{ item }" >
                            <v-btn depressed class="btn-table" color="success" small text> Success</v-btn>
                        </template>
                    </v-data-table>
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
            items: ['Location','Revenue','Join Date'],
             headers: [
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'img',
          },
          { text: 'Name', value: 'name' },
          { text: 'Button', value: 'button' },
          { text: 'Salary', value: 'salary' },
        ],
             desserts: [
          {
            img: 'avatar-1.jpg',
            name: '',
            button:'',
            salary:'$250.00'
          },
         {
            img: 'avatar-2.jpg',
            name: '',
            button:'',
            salary:'$110.00'
          },
          {
            img: 'avatar-3.jpg',
            name: '',
            button:'',
            salary:'$420.00'
          },
         {
            img: 'avatar-4.jpg',
            name: '',
            button:'',
            salary:'$120.00'
          },
          {
            img: 'avatar-5.jpg',
            name: '',
            button:'',
            salary:'$112.00'
          },
            {
            img: '/svg/avatar-1.jpg',
            name: '',
            button:'',
            salary:'$250.00'
          },
         {
            img: '/svg/avatar-2.jpg',
            name: '',
            button:'',
            salary:'$110.00'
          },
          {
            img: '/svg/avatar-3.jpg',
            name: '',
            button:'',
            salary:'$420.00'
          },
         {
            img: '/svg/avatar-4.jpg',
            name: '',
            button:'',
            salary:'$120.00'
          },
          {
            img: '/svg/avatar-5.jpg',
            name: '',
            button:'',
            salary:'$112.00'
          },
        
        ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap-table{
     height: 405px;
    overflow-y: scroll;
}
.title{
    font-size:1rem!important;
    margin: 0 0 7px;
    font-weight: 600;
}
.box{
    width: 150px;
    height: 20px;
    // margin-right: 1rem;
}

.btn-drop{
    background-color: transparent!important;
    color: #74788d!important;
     text-transform:capitalize!important;
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
@media(max-width:1024px){
    .wrap-table{
    height: 370px;
}
}
</style>