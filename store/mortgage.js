import api from '@/services/api'
export const state = () => ({
  mortgage_status: '',
  mortgages_list: [],
  details: '',
  mortgageTotalStep:5,
  mortgage_step:1,
  mortgage_form: {
     firstname: "",
     lastname: "",
     middlename: "",
     address: "",
     current_apartment_status: "",
     sex: "",
     dob: "",
     bvn: "",
     marital_status: "",
     state_of_origin: "",
     place_of_birth: "",
     nationality: "",
     phone: "",
     whatapp: "",
     email: "",
     mode_of_contact: "",
     no_of_dependents: "",

     mother_middle_name: '',
     mother_middle_name: '',
     means_of_identification: '',
     id_number: '',
     id_issue_date: '',
     id_expire_date: '',
     profession: '',
     highest_education: '',
     have_children: '',
     children: '',
     next_of_kin_name: '',
     next_of_kin_phone: '',
     next_of_kin_address: '',
     next_of_kin_dob: '',
     next_of_kin_relationship: '',
     other_source_of_income: '',

     monthly_net_pay: "",
     monthly_gross_pay: "",
     total_annual_pay: "",
     monthly_expenses: "",
     payment_option: "",
     have_equity: "",
     down_payment: "",
     have_existing_obligation: ""

  },
  last_stage_activated:false
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
   FORM_STEP(state, payload) {
       if (state.formStep < state.totalStep) {
         state.mortgage_step = payload
       }

    },
    GO_TO_STEP(state, payload) {
      state.mortgage_step = payload;
    },
    GO_BACK_STEP(state, payload) {
      if (state.mortgage_step > 1) {
        state.mortgage_step--;
      }
    },
    LAST_STAGE_ACTIVATED(state,payload){
      state.last_stage_activated=payload
    }



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
  applyForMortgageAction({ commit},form) {
    return new Promise((resolve,reject)=>{
    this.$axios.$post(api.userApplyForMortgage(),form).then((res) => {
      let r = res.data;

      commit("MORTGAGE_DETAIL", r);
      resolve(r)
    }).catch((err) => {
      reject(err);
      });
    })

  },
  applyAgreeToMortgageAction({ commit},form) {
    return new Promise((resolve,reject)=>{
    this.$axios.$post(api.userAgreeToMortgage(), form).then((res) => {
      let r = res.data;

      commit("MORTGAGE_DETAIL", r);
      resolve(r)
    }).catch((err) => {
      reject(err);
      });
    })

  },

}
export const getters = {
  detail:function(state){
    return state.details;
  }
}
