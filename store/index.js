import api from '@/services/api'
export const state = () => ({
  mortgage_status: '',
  mortgages_list: [],
  details: '',
})
export const mutations = {

  MORTGAGE_STATUS(state, payload) {
    state.mortgage_status = payload
  },
  MORTGAGE_LIST(state, payload) {
    state.mortgages_list = payload
  },
  MORTGAGE_DETAIL(state, payload) {
    state.details = payload
    console.log("mortgage details: ", state.details)
  },



}
export const actions = {


  async getMortgageListAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userMortgageList());
    let r = res.data;
    console.log("mortgage list: ", r)

    commit("MORTGAGE_LIST", r);
    return r;
  },
  async getCurrentMortgageStatusAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userMortgageStatus());
    let r = res.data;
    console.log("mortgage status: ", r)
    commit("MORTGAGE_STATUS", r);
    return r;
  },
  getMortgageDetailsAction({
    commit
  }, slug) {
    // return new Promise((resolve,reject)=>{
    this.$axios.$get(api.userMortgageDetail(slug)).then((res) => {
      let r = res.data;

      commit("MORTGAGE_DETAIL", r);
      // resolve(r)
    }).catch((err) => {
      // reject(err);
      // });
    })

  },

}
export const getters = {
  detail: function (state) {
    return state.details;
  }
}
