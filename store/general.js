import api from '../services/api'
export  const state = ()=>({
  states: [],
    ranks: [],
    finance_options: [],
    cities: [],
    property_types: [],
    properties_suggestions: []
})
export const mutations ={
    UPDATE_STATES(state,payload){
        state.states = payload
    },
    UPDATE_RANKS(state, payload) {
    state.ranks = payload
    },
    UPDATE_FINANCE_OPTION(state, payload) {
    state.finance_options = payload
    },
    UPDATE_CITIES(state, payload) {
    state.cities = payload
    },
    UPDATE_PROPERTY_TYPE(state, payload) {
    state.property_types = payload
    },
    UPDATE_PROPERTIES_SUGGESTION(state,payload){
        state.properties_suggestions = payload
    }
}
export const actions={
 async  getAllStatesAction({commit}){
        let res = await this.$axios.$get(api.allStates());
        let y = res.data;
        commit("UPDATE_STATES", y);

    },
  async getAllRanksAction({commit}){
       let res = await this.$axios.$get(api.policeRanks());
            let y = res.data;
            commit("UPDATE_RANKS", y);

    },
  async getAllFinanceOptionAction({commit}){
          let res = await this.$axios.$get(api.allPaymentOption());
            let y = res.data;
            commit("UPDATE_FINANCE_OPTION", y);

    },
  async  getAllCitiesAction({commit},state_id){
      let res = await this.$axios.$get(api.allCitiesInState(state_id));
      let y = res.data;
      commit("UPDATE_CITIES", y);

    },
   async getAllPropertyTypeAction({commit},state_id){
          let res = await this.$axios.$get(api.allPropertyTypes());
             let y = res.data;
            commit("UPDATE_PROPERTY_TYPE", y);

    },
    getPropertiesSuggestionAction({commit}){
        api.propertiesSuggestion().then((res)=>{
             let y = res.data;
             commit("UPDATE_PROPERTIES_SUGGESTION", y);
        });
    }
}
export const getters={}
