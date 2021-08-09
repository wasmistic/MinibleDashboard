import moment from "moment";
export default{

  data(){
    return{
      yesNoOption: [{
        text: 'Yes',
        value: 1
      }, {
        text: 'No',
        value: '0'
      }],
       rules: {
           required: value => !!value || "Required.",
           counter: value => value.length <= 20 || "Max 20 characters",
           pin:  value  => (value && value.length==6)|| 'Enter six digit sent to your mail',
           email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail address.";
           },
           file:value => !value || value.size < 1000000 || 'file size should be less than 1 MB!',
           before_date:function(value){
              let today = new Date();
              let given_date = new Date(value);
              if(given_date > today){
                return 'Date can\'t be greater than today'
              }
           },
           after_date:function(value){
             let today = new Date();
             let given_date = new Date(value);
            if (given_date < today ) {
                 return 'Date cannot be below today'
              }

           },
           phone:function(value){
              return value.match(/\d/g).length === 11 || 'invalid phone number';
           },
           main_phone:function(value){
             let formats = "(999)9999-9999|999-9999-9999|99999999999";
             let r = RegExp("^(" +
               formats
               .replace(/([\(\)])/g, "\\$1")
               .replace(/9/g, "\\d") +
               ")$");
               return r.test(value) || "Invalid phone number";
           }
      },
      pagination: {
        links: '',
        total: '',
        count: '',
        path: '',
        currentPage: ''
      },
    }

  },
  computed: {
        loading(){
          let l = this.$store.state.app.isLoading;
          return l;
        },
       property_types() {
         return this.$store.state.general.property_types;
       },
       allStates() {
         let s = this.$store.state.general.states;
         return s;
       },
       allCities() {
         let s = this.$store.state.general.cities;
         return s;
       },
      ranks() {
            let s = this.$store.state.general.ranks;
            return s;
        },
      financeOptions() {
             return this.$store.state.general.finance_options
      },
      user(){
        let u = this.$store.state.auth.user;
        return u;
      },
      authStatus(){
          let u = this.$store.state.auth.loggedIn;
          return u;
      },
      getUserInitial() {
          // return 'AB'
          return this.user.firstname.charAt(0) + this.user.lastname.charAt(0);
        }
     },
  methods:{
     checkValueExist(v) {
       if (v) {
         return v;
       }
       return '-'
     },
      appLoading(status){
        this.$store.commit("app/IS_LOADING",status);
      },
       activateModal(event_name, value) {
         this.$nuxt.$emit(event_name, value)
       },
    capitalizeFirst(s) {
        if (typeof s !== "string") return "";
        return s.toLowerCase();
      },
      clearCommas(value) {
        return parseFloat(value.replace(/,/g, ''));
      },
      formatCurrency(value) {
        const formatted = Number(value).toLocaleString("en");
        if (formatted === '0') return value;
        else if (formatted === 'NaN') return '';
        return formatted;
      },
      fillPagination(data) {
        this.pagination.links = data.links;
        this.pagination.total = data.total
        this.pagination.count = data.to;
        this.pagination.path = data.path;
        this.pagination.currentPage = data.current_page
      },
      // apis calls
       stateChange(state_id) {
         this.$store.dispatch("general/getAllCitiesAction", state_id)
       },
      fetchCities(state_id) {
        this.appLoading(true)
        this.$store.dispatch("general/getAllCitiesAction", state_id).then((res) => {
          this.appLoading(false)
        });
      },
      mapPropertyTypeId(type){
        let t = this.property_types;
        let id ='';
        for(let i=0; i<= t.length;i++){
          let n = t[i];
           if (n.name == type) {
             id = n.id;
             break;
           }
        }
        return id;

      },
      compare(dateTimeA, dateTimeB) {
         var momentA = moment(dateTimeA, "DD/MM/YYYY");
         var momentB = moment(dateTimeB, "DD/MM/YYYY");
         if (momentA > momentB) return 1;
         else if (momentA < momentB) return -1;
         else return 0;
       }
  }
}
