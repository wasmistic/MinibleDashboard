<template>
    <div>
         <v-navigation-drawer
             v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            app
            class="py-3 px-3"
            >
            <div class="d-flex align-center justify-space-between" style="width:100%" id="logo_card">
                <div class="image"><v-img src="/mini_logo.png"></v-img></div>
                <!-- <v-app-bar-nav-icon class="pt-2 harmburger" @click="drawer=!drawer"></v-app-bar-nav-icon> -->
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



<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      absolute
      class="pt-4"
      color="#fff"
      app
      mini-variant-width="70"
      overlay-color="#000"
       @click.stop="size"
       
    >
       <v-list-item class="px-2 fixed" >
        <v-list-item-avatar>
          <v-img src="/logo_sm.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title><div class="logo"><strong>MINIBLE</strong></div></v-list-item-title>

        <v-btn
          icon
          @click.stop="size"
        >
          <v-icon color="#000">mdi-menu</v-icon>
        </v-btn>
      </v-list-item>
     <v-divider></v-divider>
          <v-list class="menu-mg" dense>
        <v-subheader v-show="subpage" key="1" class="top-text">Menu</v-subheader>
         <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="item in menu"
          :key="item.text"
          link
        >
          <v-list-item-icon>
            <v-icon size="16.8" class="mr-3 icon-img">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="list-text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         </v-list-item-group>
      </v-list>
          <v-list dense>
        <v-subheader v-show="subpage" key="2" class="top-text">Apps</v-subheader>
         <v-list-item-group
        v-model=" selectedApp"
        color="primary"
      >
        <v-list-item
          v-for="item in apps"
          :key="item.text"
          link
        >
          <v-list-item-icon>
            <v-icon size="16.8" class="mr-3 icon-img">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="list-text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         </v-list-item-group>
      </v-list>
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

                 <v-list class="bottom-mg">
                <v-subheader v-show="subpage" key="3"  class="top-text">Pages</v-subheader>
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

                 <v-list class="bottom-mg">
                <v-subheader v-show="subpage" key="4" class="top-text">components</v-subheader>
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
    
    </v-navigation-drawer>
      <v-app-bar app class="pt-1"  light style="background-color:#fff;">
            <v-app-bar-nav-icon v-show="harburger" class="harmburger" @click.stop="size"></v-app-bar-nav-icon>
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
      <nuxt/>
      <!--  -->
    </v-main>
       <v-bottom-navigation hide-on-scroll class="d-flex align-center justify-space-between px-8">
              <span class="footer-text">2021 © Minible.</span>
                <span class="footer-text d-none d-sm-inline-flex">Crafted with <span class="text-danger"> &#10084;</span> by Themesbrand</span>
        </v-bottom-navigation>
  </v-app>



             <v-app id="inspire">
          <v-navigation-drawer
             v-model="drawer"
            app
            :class="{'shown':reduce}"
            class="py-3 px-3"
            >

            <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="/logo_sm.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>MINIBLE</v-list-item-title>

            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>
            <!-- <div class="d-flex align-center justify-space-between" style="width:100%" id="logo_card">
                <div class="image"><v-img src="/mini_logo.png"></v-img></div>
                <v-app-bar-nav-icon class="pt-2 harmburger"  @click.stop="mini = !mini"></v-app-bar-nav-icon>
            </div> -->




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
            <v-app-bar-nav-icon class="harmburger" @click.stop="mini = !mini"></v-app-bar-nav-icon>
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
         data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
    }
</script>

<style lang="scss" scoped>

</style>