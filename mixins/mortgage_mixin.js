import moment from "moment";
export default {
    data() {
      return {
        personal_form: {
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
          children: [],
          next_of_kin_name: '',
          next_of_kin_phone: '',
          next_of_kin_address: '',
          next_of_kin_dob: '',
          next_of_kin_relationship: '',
          other_source_of_income: '',

           nhf_registration_number: "",
            is_rsa_holder: '',
           employment_id: "",
           employment_present_position: "",
           employer_address: "",
           employment_state: "",
           work_experience: "",
           year_to_retirement: "",

           employment_status: '',
           employer_name: '',
           employer_email: '',
           employer_phone: '',

           pfa_name: '',

          monthly_net_pay: "",
          monthly_gross_pay: "",
          total_annual_pay: "",
          monthly_expenses: "",
          payment_option: "",
          have_equity: "",
          have_existing_obligation: "",

          max_loan_amount: '',
          loan_amount: '',
          loanable_amount: '',
          down_payment: '',
          down_rate: '',
          monthly_repayment: '',
          loan_tenure:''



        },
      }
    },
  computed: {
          property_request(){
            return this.$store.state.dashboard.property_request;
          },
         dob: {
             set: function (v) {
               this.personal_form.dob = v;
             },
             get: function () {
               return moment(String(this.personal_form.dob)).format('yyyy-MM-DD')
             }
           },
          //  sex:{
          //     set(v){
          //       this.personal_form.sex =v;
          //     },
          //     get(){
          //       return this.capitalizeFirstLetter(this.personal_form.sex;)
          //     }
          //  },
           issue_date: {
             set(v) {
               this.personal_form.id_issue_date = v;
             },
             get() {
               return moment(String(this.personal_form.id_issue_date)).format('yyyy-MM-DD')
             }
           },
           expire_date: {
             set(v) {
               this.personal_form.id_expire_date = v;
             },
             get() {
               return moment(String(this.personal_form.id_expire_date)).format('yyyy-MM-DD')
             }
           },
           monthly_income: {
                 get() {
                   return this.formatCurrency(this.personal_form.monthly_net_pay);
                 },
                 set(v) {
                   this.personal_form.monthly_net_pay = this.clearCommas(v);
                 }
           },
           gross_income: {
              get() {
                return this.formatCurrency(this.personal_form.monthly_gross_pay);
              },
              set(v) {
                this.personal_form.monthly_gross_pay = this.clearCommas(v);
              }
           },
           total_pay: {
              get() {
                return this.formatCurrency(this.personal_form.total_annual_pay);
              },
              set(v) {
                this.personal_form.total_annual_pay = this.clearCommas(v);
              }
           },
            loanable_amount: {
              get() {
                return this.formatCurrency(this.personal_form.loanable_amount);
              },
              set(v) {
                this.personal_form.loanable_amount = this.clearCommas(v);
              }
            },
            expenses: {
              get() {
                return this.formatCurrency(this.personal_form.monthly_expenses);
              },
              set(v) {
                this.personal_form.monthly_expenses = this.clearCommas(v);
              }
            },
           getPersonalForm(){
             return this.$store.state.profile.profile;
           }

  },
  methods: {
     prefillMortgageForm() {
       this.personal_form = this.getPersonalForm;
      //  let r = this.$store.state.auth.user;
      //  this.mapIncomingDataToForm(this.personal_form, r);

     },
  },
}
