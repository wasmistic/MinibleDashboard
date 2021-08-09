import api from '../services/api'
export const state = () => ({
  profile: {
     total_annual_pay: '',
     monthly_net_pay: '',
     monthly_gross_pay:'',
     additional_income: '',
     outstanding_loans: '',
     have_existing_obligation: 0,
     have_co_borrower: 0,
     co_borrower_monthly_income: '',
     age: 0,
     property_value: '',
     max_loan_amount: '',
     loan_amount: '',
     loanable_amount:'',
     down_payment: '',
     down_rate: '',
     monthly_repayment: '',
     loan_tenure: '',
     state_id: '',
     city_id: '',
     property_type_id: '',
     property_bedroom: '',
     property_bathroom: '',
     property_id: '',
     found_property: '',
     type: 'mortgage',
     property_address: '',
     property_description: '',

     firstname: '',
     lastname: '',
     middlename:'',
     email: '',
     phone: '',
      address: "",
      current_apartment_status: "",
      sex: "",
      dob: "",
      bvn: "",
      marital_status: "",
      state_of_origin: "",
      place_of_birth: "",
      nationality: "",
      whatapp: "",
      mode_of_contact: "",
      no_of_dependents: "",
      bvn:'',
      profession:'',
      employment_id: "",
      employment_present_position: "",
      employer_address: "",
      employment_state: "",
      work_experience: "",
      year_to_retirement: "",
      nhf_registration_number: "",
      employment_status: '',
      employer_name: '',
      is_rsa_holder: '',
      pfa_name: '',

      mother_middle_name:'',
      means_of_identification:'',
      id_number:'',
      id_issue_date:'',
      id_expire_date:'',
      profession:'',
      highest_education:'',
      have_children:'',
      children:'',
      next_of_kin_name:'',
      next_of_kin_phone:'',
      next_of_kin_address:'',
      next_of_kin_dob:'',
      next_of_kin_relationship:'',
      other_source_of_income:''
   },
   user_request:'',
   request_form:{
      state_id:'',
      city_id:'',
      property_id:'',
      found_property:'',
      property_value:'',
      property_bathroom:'',
      property_bedroom:''
   },
   formStep: 1,
   totalStep: 4,
})
export const mutations = {
  PREFILL_PERSONAL_FORM(state, payload) {
     state.profile = payload
   },

  SAVE_PERSONAL_FORM(state, payload) {

    state.profile.firstname = payload.firstname;
    state.profile.lastname = payload.lastname;
    state.profile.middlename = payload.middlename;
    state.profile.phone = payload.phone;
    state.profile.current_apartment_status = payload.current_apartment_status;
    state.profile.address = payload.address;
    state.profile.dob = payload.dob;
    state.profile.marital_status = payload.marital_status;
    state.profile.state_of_origin = payload.state_of_origin;
    state.profile.place_of_birth = payload.place_of_birth;
    state.profile.mode_of_contact = payload.mode_of_contact;
    state.profile.no_of_dependents = payload.no_of_dependents;
    state.profile.nationality = payload.nationality;

      state.profile.mother_middle_name=payload.mother_middle_name
       state.profile.means_of_identification=payload.means_of_identification
       state.profile.id_number=payload.id_number
       state.profile.id_issue_date=payload.id_issue_date
       state.profile.id_expire_date=payload.id_expire_date
       state.profile.profession=payload.profession
       state.profile.highest_education=payload.highest_education
       state.profile.have_children=payload.have_children
       state.profile.children=payload.children
       state.profile.next_of_kin_name=payload.next_of_kin_name
       state.profile.next_of_kin_phone=payload.next_of_kin_phone
       state.profile.next_of_kin_address=payload.next_of_kin_address
       state.profile.next_of_kin_dob=payload.next_of_kin_dob
       state.profile.next_of_kin_relationship=payload.next_of_kin_relationship
       state.profile.other_source_of_income=payload.other_source_of_income

    },
  SAVE_EMPLOYMENT_FORM(state,payload){
       state.profile.profession  = payload.profession;
       state.profile.bvn  = payload.bvn;
      state.profile.employment_id = payload.employment_id,
      state.profile.employment_present_position=payload.employment_present_position,
      state.profile.employer_address=payload.employer_address,
      state.profile.employment_state=payload.employment_state,
      state.profile.work_experience=payload.work_experience,
      state.profile.year_to_retirement=payload.year_to_retirement,
      state.profile.nhf_registration_number=payload.nhf_registration_number,
      state.profile.employment_status=payload.employment_status,
      state.profile.employer_name=payload.employer_name
  },
  SAVE_AFFORDABILITY_FORM(state, payload) {
    state.profile.monthly_net_pay = payload.monthly_net_pay;
    state.profile.additional_income = payload.additional_income;
    state.profile.outstanding_loans = payload.outstanding_loans;
    state.profile.have_existing_obligation = payload.have_existing_obligation;
    state.profile.have_co_borrower = payload.have_co_borrower;
    state.profile.co_borrower_monthly_income = payload.co_borrower_monthly_income;

  },
   CLEAR_FORM(state, payload) {
     console.log("stire profile clear")
     state.profile = {
       total_annual_pay: '',
       monthly_net_pay: '',
       additional_income: '',
       outstanding_loans: '',
       have_existing_obligation: 0,
       have_co_borrower: 0,
       co_borrower_monthly_income: '',
       dob: '',
       age: 0,
       property_value: '',
       max_loan_amount: '',
       loan_amount: '',
       down_payment: '',
       down_rate: '',
       monthly_payment: '',
       loan_tenure: '',
       state_id: '',
       city_id: '',
       property_type_id: '',
       property_bedroom: '',
       property_bathroom: '',
       property_id: '',
       found_property: '',
       type: 'mortgage',
       property_address: '',
       property_description: '',
       firstname: '',
       lastname: '',
       email: '',
       phone: '',
       employment_status: '',
       employer_name: '',
       is_rsa_holder: '',
       pfa_name: '',
       location: ''
     }
   },
   AFFORDABILITY_RESULT(state, payload) {
     state.profile.max_loan_amount = payload.loanable_amount;
     state.profile.loanable_amount = payload.loanable_amount;
     state.profile.monthly_payment = payload.monthly_payment;
     state.profile.loan_tenure = payload.loan_tenure;
     state.profile.monthly_gross_pay = payload.monthly_gross_pay;
   },

   SAVE_ELIGIBILITY_FORM(state, payload) {
     state.profile.loan_amount = payload.loan_amount;
     state.profile.down_payment = payload.down_payment;
     state.profile.down_rate = payload.down_rate;
   },
   SAVE_PROFILE_FORM(state, payload) {
     state.profile.firstname = payload.firstname;
     state.profile.lastname = payload.lastname;
     state.profile.email = payload.email;
     state.profile.phone = payload.phone;
     state.profile.employment_status = payload.employment_status;
     state.profile.address = payload.address;
     state.profile.employer_name = payload.employer_name;
     state.is_rsa_holder = payload.is_rsa_holder;
     state.pfa_name = payload.pfa_name;
   },
   SAVE_PROPERTY_REQUEST_DATA(state, payload) {
     state.profile.property_value = payload.property_value;
     state.profile.city_id = payload.city_id
     state.profile.state_id = payload.state_id
     state.profile.property_bathroom = payload.property_bathrooms
     state.profile.property_bedroom = payload.property_bedrooms
     state.profile.found_property = 0;
   },
  UPDATE_USER_REQUEST(state, payload) {
       state.user_request = payload
  },
   SAVE_SELECTED_PROPERTY(state, payload) {
     state.profile.city_id = payload.city_id
     state.profile.state_id = payload.state_id
     state.profile.property_bathroom = payload.property_bathrooms
     state.profile.property_bedroom = payload.property_bedrooms
     state.profile.property_id = payload.id
     state.profile.found_property = 1;
   },
  FORM_STEP(state, payload) {
      if (state.formStep < state.totalStep) {
        state.formStep = payload
      }

    },
  GO_TO_STEP(state, payload) {
      state.formStep = payload;
  },
  GO_BACK_STEP(state,payload){
      if(state.formStep>1){
        state.formStep--;
      }
  }
}
export const actions = {
    async getProfileAction({ commit}) {
        let res = await this.$axios.$get(api.updateProfileInfo());
        let p = res.data;
        commit("PREFILL_PERSONAL_FORM", p);
        return p;

    },
    prefillPersonalFormAction({commit},profile){
      commit("PREFILL_PERSONAL_FORM",profile);
      return profile;
    },
    async savePersonalInfoFormAction({commit},profile){

        await commit("SAVE_PERSONAL_FORM", profile);
        return profile;
    },
   async  saveEmploymentInfoFormAction({commit},profile){
        await commit("SAVE_EMPLOYMENT_FORM", profile);
        return profile;
    },
  savePersonalAndEmploymentDataAction({commit},profile){
    return new Promise((resolve,reject)=>{
        this.$axios.$post(api.updateProfileInfo(), profile).then((res)=>{
          let r =   res.data;
            commit("PREFILL_PERSONAL_FORM", r);
            this.$auth.setUser(r);
            resolve(r);
        }).catch((err) => {
            reject(err);
        })
    })
    // let res = await this.$axios.$post(api.updateProfileInfo(),profile);
    // let r = await
    // return r;
    },
    calculateAffordabilityAction({commit }, profile) {
        return new Promise((resolve, reject) => {
          this.$axios.$post(api.updateAffordabilityInfo(), profile).then((res) => {
            let d = res.data;
            commit("AFFORDABILITY_RESULT", d);
            this.$auth.setUser(d);
            resolve(d);
          }).catch((err) => {
            reject(err);
          })
        })

         //     commit("AFFORDABILITY_RESULT", profile);
    },
    saveUserRequestAction({ commit }, profile) {
             return new Promise((resolve, reject) => {
               this.$axios.$post(api.saveUserRequest(),profile).then((res)=>{
                 let y = res.data.data;
                 commit("UPDATE_USER_REQUEST", y);

                 resolve(y)
               }).catch((err)=>{
                 reject(err);
               })
             })

    },
      saveAffordabilityFormAction({
         commit
       }, profile) {
         commit("SAVE_AFFORDABILITY_FORM", profile);
       },
       saveEligibilityFormAction({
         commit
       }, profile) {
         commit("SAVE_ELIGIBILITY_FORM", profile);
       },
       saveProfileFormAction({
         commit
       }, profile) {
         commit("SAVE_PROFILE_FORM", profile);
       },
       async processStatusAction({
           commit
         }, profile) {

           commit("PROCESS_STATUS", profile);
         },
         async formStepAction({
             commit
           }, step) {
             commit("FORM_STEP", step);
             // EventBus.$emit('next-step',step);

           },
           submitPreQualifiedAction({
             commit
           }, data) {
             console.log(data);
             return new Promise((resolve, reject) => {
               api.savePrequalified(data).then((res) => {
                 let r = res.data.data;
                 commit("PREQUALIFIED_FORM", r)
                 resolve(r);
               })
             })
           }

}
export const getters = {
  getform:()=>state.profile
}
