<template>
    <div>
        
             <v-app id="inspire">
          <v-navigation-drawer
            v-model="drawer"
            app
            :class="{'shown':reduce}"
            class="py-3 px-3"
            >
            <div class="d-flex align-center justify-space-between" style="width:100%" id="logo_card">
                <div class="image"><v-img src="/mini_logo.png"></v-img></div>
                <!-- <v-app-bar-nav-icon class="pt-2 harmburger"  @click.stop="mini = !mini"></v-app-bar-nav-icon> -->
            </div>




             <v-card
                elevation="0"
                 width="300"
                 class="menu-top-card"
            >
                <v-list dense>
                <v-subheader  class="top-text">Menu</v-subheader>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    
                >
                    <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title class="list-text">
                          <v-icon size="16.8" class="mr-3 icon-img" v-text="item.icon"></v-icon>
                          {{item.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
              <v-card
                elevation="0"
                 width="300"
            >
                <v-list dense>
                <v-subheader class="top-text">Apps</v-subheader>
                <v-list-item-group
                    v-model="selectedApp"
                    color="primary"
                    
                >
                    <v-list-item
                    v-for="(item, i) in apps"
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title class="list-text app">
                          <v-icon size="16.8" class="mr-3 icon-img" v-text="item.icon"></v-icon>{{item.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
             <v-card
              class="mx-auto"
              width="300"
              elevation="0"
            >
                <v-list>
                  <v-list-group
                    v-for="item in list_items"
                    :key="item.title"
                    v-model="item.active"
                    color="primary"
                    no-action
                   
                  >
                    <template v-slot:activator>
                      <v-list-item-content >
                        <v-list-item-title class="list-text">
                          <v-icon class="mr-3 icon-img">{{item.action}}</v-icon> {{item.title}}
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="child in item.items"
                      :key="child.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title class="children" v-text="child.title"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </v-list>
            </v-card>
             <v-card
              class="mx-auto"
              width="300"
              elevation="0"
            >
            <v-list class="bottom-mg">
                <v-subheader  class="top-text">Pages</v-subheader>
            </v-list>
                <v-list>
                  <v-list-group
                    v-for="item in pages_items"
                    :key="item.title"
                    v-model="item.active"
                    
                    no-action
                   
                  >
                    <template v-slot:activator>
                      <v-list-item-content >
                        <v-list-item-title class="list-text">
                          <v-icon class="mr-3 icon-img">{{item.action}}</v-icon> {{item.title}}
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="child in item.items"
                      :key="child.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title class="children" v-text="child.title"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </v-list>
            </v-card>
             <v-card
              class="mx-auto"
              width="300"
              elevation="0"
            >
            <v-list class="bottom-mg">
                <v-subheader  class="top-text">components</v-subheader>
            </v-list>
                <v-list>
                  <v-list-group
                    v-for="item in components_items"
                    :key="item.title"
                    v-model="item.active"
                    
                    no-action
                   
                  >
                    <template v-slot:activator>
                      <v-list-item-content >
                        <v-list-item-title class="list-text">
                          <v-icon class="mr-3 icon-img">{{item.action}}</v-icon> {{item.title}}
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="child in item.items"
                      :key="child.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title class="children" v-text="child.title"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </v-list>
            </v-card>
            <!--  -->
            </v-navigation-drawer>

            <v-app-bar app class="pt-1"  light style="background-color:#fff;">
            <v-app-bar-nav-icon class="harmburger" @click.stop="size"></v-app-bar-nav-icon>
            <v-toolbar-title>
                    <div class="left-box">
                   <input type="search" value="Search..."/>
                   <v-icon class="search">mdi-magnify</v-icon>
                </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
             <div class="d-flex align-center justify-space-around" id="right-box">
                <v-btn depressed text class="mr-8"> <div class="d-flex align-center justify-start"><div class="usa"><img src="/usa.jpg" alt=""><a href="" class="ml-2 text-decoration-none " style="color: #555b6d;">English</a></div></div></v-btn> 
                <v-btn icon depressed class="ml-8 d-none d-md-inline-flex"><v-icon size="22" color="#555b6d">mdi-view-dashboard-outline</v-icon> </v-btn>
                <v-btn class="d-none d-md-inline-flex" icon depressed><v-icon size="22" color="#555b6d">mdi-flip-to-front</v-icon> </v-btn>
                 <v-badge
                  color="error"
                  content="8"
                  overlap
                   bordered
                >
                 <v-btn icon class="pa-0" depressed><v-icon size="22" color="#555b6d">mdi-bell-outline</v-icon> </v-btn>
                </v-badge>
                      <div class="mx-lg-5 ml-2" style="cursor:pointer;">
                            <v-avatar
                                size="36px"
                              >
                                <img
                                  alt="Avatar"
                                  src="/svg/avatar-1.jpg"
                                >
                              </v-avatar>
                              <b  class=" mx-4 d-none d-md-inline-flex" color="#555b6d">Marcus</b>
                              <v-icon class="d-none d-md-inline-flex" size="22" color="#555b6d">mdi-chevron-down</v-icon>
                      </div>
                 <v-btn class="d-none d-sm-inline-flex" icon depressed><v-icon size="22" color="#555b6d">mdi-cog-outline</v-icon> </v-btn> 
                </div>
            </v-app-bar>

            <v-main>
              <v-container>
                 <nuxt/>
              </v-container>
            <!--  -->
            </v-main>
            <v-bottom-navigation hide-on-scroll class="d-flex align-center justify-space-between px-8">
              <span class="footer-text">2021 © Minible.</span>
                <span class="footer-text d-none d-sm-inline-flex">Crafted with <span class="text-danger"> &#10084;</span> by Themesbrand</span>
        </v-bottom-navigation>
        </v-app>
    </div>
</template>

<script>
    export default {
         data(){
             return{
                 drawer: true,
                 mini:true,
                 harburger:true,
                 subpage:false,
                 reduce:false,
                 spread:false,
                 dash:true,
                 selectedItem: 1,
                 selectedApp:1,
                  items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      menu: [
        { text: 'Dashboard', icon: 'mdi-home-city' },
      ],
       apps: [
        { text: 'Calender', icon: 'mdi-calendar-blank-outline' },
        { text: 'Chat', icon: 'mdi-comment-multiple-outline' },
      ],
           list_items: [
        {
          action: 'mdi-storefront-outline',
          items: [
            { title: 'Products'},
            {title:'Product Detail'},
            {title:'Orders'},
            {title:'Customers'},
            {title:'Chat'},
            {title:'Checkout'},
            {title:'Shops'},
            {title:'Add Product'},
            ],
          title: 'Ecomerce',
        },
        {
          action: 'mdi-email-outline',
          items: [
            { title: 'Inbox' },
            { title: 'Read Email' },
          ],
          title: 'Email',
        },
        {
          action: 'mdi-clipboard-text-outline',
          items: [
            { title: 'Invoice List' },
            { title: 'Invoice Details' },
          ],
          title: 'Invoices',
        },
        {
          action: 'mdi-account-box-outline',
          items: [
            { title: 'User Grid' },
            { title: 'User List' },
            { title: 'Profile' },
            ],
          title: 'Contacts',
        },
      ],
           pages_items: [
       
        {
          action: 'mdi-account-circle-outline',
          items: [
            { title: 'Log in' },
            { title: 'Register' },
            { title: 'Recover Password' },
            { title: 'Lock Screen' },
            ],
          title: 'Authentication',
        },
        {
          action: 'mdi-file-table-outline',
          items: [{ title: 'List Item' }],
          title: 'Utility',
        },
      ],
           components_items: [
       
        {
          action: 'mdi-flask-empty-outline',
          items: [
            { title: 'Alerts' },
            { title: 'Buttons' },
            { title: 'Cards' },
            { title: 'Carousel' },
            { title: 'Dropdowns' },
            { title: 'Grid' },
            { title: 'Images' },
            { title: 'LightBox' },
            { title: 'Modals' },
            ],
          title: 'UI Elements',
        },
        {
          action: 'mdi-steering',
          items: [
            { title: 'Elements' },
            { title: 'Validation' },
            { title: 'Advanced' },
            { title: 'Editor' },
            { title: 'File Upload' },
            { title: 'Repaeter' },
            { title: 'Wizard' },
            { title: 'Mask' },
            ],
          title: 'Forms',
        },
         {
          action: 'mdi-format-list-bulleted',
          items: [
            { title: 'Basic Tables' },
            { title: 'Advance Table' },
            ],
          title: 'Tables',
        },
         {
          action: 'mdi-file-chart-outline',
          items: [
            { title: 'Apex' },
            { title: 'Chartjs' },
            { title: 'Chartist' },
            { title: 'E Chart' },
            ],
          title: 'Charts',
        },
         {
          action: 'mdi-lifebuoy',
          items: [
            { title: 'Unicones' },
            { title: 'Boxicones' },
            { title: 'Material Design' },
            { title: 'Dripcone' },
            { title: 'Font awesome' },
            ],
          title: 'Icons',
        },
         {
          action: 'mdi-map-marker-outline',
          items: [
            { title: 'Google  Maps' },
            { title: 'Leaflet Maps' },
            ],
          title: 'Maps',
        },
         {
          action: 'mdi-share-variant',
          items: [
            { title: 'Level 1.1' },
            { title: 'Level 1.2' },
            ],
          title: 'Multis Level',
        },
      ],
             }
         },
         methods:{
             size(){
                 this.mini=!this.mini
                 this.harburger=!this.harburger
                 this.subpage=!this.subpage
                 this.drawer=!this.drawer
                //  this.spread=!this.spread
                //  this.dash==true
             }
         }

    }
</script>

<style lang="scss" scoped>
.shown{
    width: 80px!important;
    transition: width 0.5s ease-in-out;
}
.length{
  width:calc(100%-60px)!important;
  transition: width 0.5s ease-in-out;
}
.menu-mg{
  margin-top:4rem!important;
}
#wrapper{
    width:100%;
}
.left-box{
    position: relative;
    margin: 0.25rem 0;
    width: 200px;
    height: 40px;
}

.footer-wrap{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
}
input{
    width: 100%;
    height: 100%;
    padding: 0.65rem;
    padding-left: 2rem;
    outline: none;
    border: none;
    font-size: 0.875rem!important;
}

.search{
    position: absolute;
    left: 0;
    top: 10px;
}
img{
    width: 100%;
    height: auto;
}
.image{
    width: 50%;
    margin-top:0.45rem;
}
.usa{
  width: 34px;
  height: 18px;
  display: inline-flex;
}
.top-drawer{
    width: 100%;
}
.list-mg{
    margin-right:-1rem!important;
}
.list-text{
    font-size:0.9375rem!important;
    color:#7b8190!important;
    font-weight: 500!important;
   
}
.v-list-item__action, .v-list-item__avatar, .v-list-item__icon {
    min-width:0px!important;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
  margin-right:0px!important;
}
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item {
    padding-left: 45px!important;
}
.icon-img{
    font-size:0.9375rem!important;
}
.top-text{
    color: #7b8190!important;
    font-weight: 600!important;
    font-size: 0.6875rem!important;
    text-transform: uppercase;
}
.children{
    // padding: .4rem 1.5rem .4rem 3.5rem;
    font-weight: 400;
    color: #7b8190;
    margin: 0;
    background-color: transparent;
    font-size:0.9rem;
    padding-left: 0rem!important;
}
.harmburger{
  font-size:1.25em!important;
  color: #000!important;
  margin-top: -0.45rem;
}
.fixed{
  position:fixed;
  position: -webkit-fixed;
  height: 64px;
  background: #fff;
  backdrop-filter: blur(200px);
  backface-visibility: hidden;
  top: 0px;
  left: 0px;
  right: 0px;
  padding:0 1rem;
  z-index: 1;
}
.menu-top-card{
  margin-top: 2rem;
}
.bottom-mg{
  margin-bottom: -1.5rem;
}
.text-danger{
  color: #f46a6a!important;
  margin:0 0.25rem;
}
.footer-text{
  letter-spacing: 0.9px;
  margin-right: 0.45rem;
  // position: absolute;
  // left: 18rem;
}
.footer-right{
 position: absolute;
 right: 0.25rem;
}
.logo{
  font-weight: bolder;
  color: rgb(17, 17, 134);
}
body {
    margin: 0;
    font-family:sans-serif;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #f5f6f8;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
@media(max-width:900px){
  #right-box{
    width: 100%;
  }
  .footer-text{
    padding:0 2rem
  }

};
@media(max-width: 500px){
  .usa{
  width: 18px;
  height: 15px;
  margin-left:-1.6rem;
}
.usa a{
  font-size: 0.625!important;
}
.footer-text{
  right: 0rem;
}

}

</style>