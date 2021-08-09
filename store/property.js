import api from '../services/api'
export  const state = ()=>({
    suggested_properties: [
      {
        property_id:1,
        property_value:3000000,
        property_name:"Locus Court",
        state_id:25,
        city_id:775,
        property_bedrooms:3,
        property_bathrooms:2
      },
      {
         property_id: 2,
        property_value:45000000,
        property_name:"Curious House",
        state_id:25,
        city_id:775,
        property_bedrooms:3,
        property_bathrooms:4
      },
      {
         property_id: 3,
        property_value:52000000,
        property_name:"Tower House",
        state_id:25,
        city_id:775,
        property_bedrooms:4,
        property_bathrooms:5
      },
      {
         property_id: 4,
        property_value:70000000,
        property_name:"King Masion",
        state_id:25,
        city_id:775,
        property_bedrooms:6,
        property_bathrooms:7
      },
      {
         property_id: 5,
        property_value:25000000,
        property_name:"Mari M",
        state_id:25,
        city_id:775,
        property_bedrooms:3,
        property_bathrooms:2
      },
      {
         property_id: 6,
        property_value:15000000,
        property_name:"Brain Quater",
        state_id:25,
        city_id:775,
        property_bedrooms:2,
        property_bathrooms:2
      },
      {
         property_id: 7,
        property_value:38500000,
        property_name:"Musy PI",
        state_id:25,
        city_id:775,
        property_bedroom:3,
        property_bathroom:2
      },
      {
         property_id: 8,
        property_value:17000000,
        property_name:"Hapy Court",
        state_id:25,
        city_id:775,
        property_bedrooms:3,
        property_bathrooms:2
      },
      {
         property_id: 9,
        property_value:62800000,
        property_name:"Lady Best",
        state_id:25,
        city_id:775,
        property_bedrooms:5,
        property_bathrooms:6
      },
    ],
    selected_property:'',
    affordable_properties:''
})
export const mutations ={
    SUGGESTED_PROPERTY(state,payload){
        state.suggested_properties = payload
    },
    SELECTED_PROPERTY(state,payload){
      state.selected_property=payload
    },
    REMOVE_SELECTED_PROPERTY(state,payload){
      state.selected_property='';
    },
  AFFORDABLE_PROPERTIES(state, payload) {
    state.affordable_properties = payload;
  },

}
export const actions={
  async paginationAction({commit }, data) {
    let url = data.url;
    let mutator = data.mutator;
    let method = data.method
    let form = data.form;
    let res='';
    if(method=='post'){
      res = await this.$axios.post(url,form);
    }else{
      res = await this.$axios.get(url);
    }
    let r = res.data;
      commit(mutator, r);
  },
  async getAffordablePropertiesAction({commit},price){
    let res = await this.$axios.get(api.propertyBelowPrice(price));
    let r =  res.data.data;
    commit("AFFORDABLE_PROPERTIES",r);
    console.log(r);
    return r;

  },
 async  getSelectProperty({commit},property){
    commit("SELECTED_PROPERTY", property);
  },
}
export const getters={}
