<template>
    <v-container>
         <v-card elevation="2" >
            <v-card-text>
                <div class="d-flex align-baseline justify-space-between mb-8">
                    <div class="title">Recent Activity</div>
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
                           Recent <v-icon small class="ml-2">mdi-chevron-down</v-icon>
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
                    <v-card tile elevation="0">
                        <v-card-text>
                        <v-timeline
                        align-top
                        clipped
                        dense
                        class="line"
                        >
                        <v-timeline-item
                        color="#5b73e8"
                        small
                        inset
                        >
                        <div class="timeline-wrapper">
                            <div class="top-timeline">Today <small>12:20 pm</small></div>
                            <div class="middle-timeline-text">Andrei Coman magna sed porta finibus, risus posted a new article: <span class="span-timeline-text"> Forget UX Rowland</span> </div>
                        </div>
                        </v-timeline-item>
                        <v-timeline-item
                        color="#5b73e8"
                        small
                        inset
                        >
                        <div class="timeline-wrapper">
                            <div class="top-timeline">22 Jul, 2020 <small>12:36 pm</small></div>
                            <div class="middle-timeline-text">Andrei Coman posted a new article: <span class="span-timeline-text"> Designer Alex</span> </div>
                        </div>
                        </v-timeline-item>
                         <v-timeline-item
                        color="#5b73e8"
                        small
                        inset
                        >
                        <div class="timeline-wrapper">
                            <div class="top-timeline">10 Jul, 2020 <small>08:42 pm</small></div>
                            <div class="middle-timeline-text">Zack Wetass, Chris combined Commented: <span class="span-timeline-text">UX Murphy</span> </div>
                        </div>
                        </v-timeline-item>
                         <v-timeline-item
                        color="#5b73e8"
                        small
                        inset
                        >
                        <div class="timeline-wrapper">
                            <div class="top-timeline">23 Jun, 2020 <small>12:22 am</small></div>
                            <div class="middle-timeline-text">Zack Wetass, sed porta finibus, risus Chris Wallace Commented: <span class="span-timeline-text">Developer Moreno</span> </div>
                        </div>
                        </v-timeline-item>
                         <v-timeline-item
                        color="#5b73e8"
                        small
                        inset
                        >
                        <div class="timeline-wrapper">
                            <div class="top-timeline">20 Jun, 2020 <small>09:48 pm </small></div>
                            <div class="middle-timeline-text">Zack Wetass, Chris combined Commented: <span class="span-timeline-text">UX Murphy</span> </div>
                        </div>
                        </v-timeline-item>
                        </v-timeline>
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
            items: ['Recent','By Users'],
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
.top-timeline{
    font-size: 13px!important;
    color: #74788d!important;
    margin-bottom:-0.75rem!important;
}
.middle-timeline-text{
    display: inline-block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.span-timeline-text{
    color: #5b73e8!important;
}
.timeline-wrapper{
    margin-left:-1.7rem!important;
}
.line{
    margin-left:-3rem!important;
}
</style>