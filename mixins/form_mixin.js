export default{
  data(){
    return{
        formStep: ['profiling', 'profiling/employment', 'profiling/affordability', 'request']
    }
  },
    computed:{
      step:{
        get(){
          return this.$store.state.profile.formStep;
        },
        set(v){
          this.$store.commit("profile/GO_TO_STEP",v);
        }
      },
      totalStep(){
        return this.$store.state.profile.totalStep;
      },
      mortgagestep:{
        get(){
          return this.$store.state.mortgage.mortgage_step;
        },
        set(v){
          this.$store.commit("mortgage/GO_TO_STEP",v);
        }
      },
      mortgageTotalStep(){
        return this.$store.state.mortgage.mortgageTotalStep;
      },
      min() {
          if (this.resultType != '%') {
            return this.min_range;
          } else {
            return this.min_range + ' ' + this.resultType;
          }
        },
        max() {
          if (this.resultType != '%') {
            return !isNaN(this.max_range) && this.max_range > 0 ? this.max_range : 20;
          } else {
            return this.max_range + ' ' + this.resultType;
          }
        },
    },
    methods:{
          goNextFormStep(route){
            let r = this.formStep.indexOf(route);
            let next = r+1;
            // this.goNextStep(next);
            this.$router.push(this.formStep[next]);
          },
          goBcakFormStep(route){
            let r = this.formStep.indexOf(route);
            let next = r - 1;
            console.log('step num: ', r);
            this.$router.push(this.formStep[next]);
          },
          goNextStep(step){
            this.$store.commit("profile/GO_TO_STEP", step);
          },
          goBackStep(){
            this.$store.commit("profile/GO_BACK_STEP",-1);
            this.$router.go(-1);
          },
          goMortgageNextStep(step) {
             this.$store.commit("mortgage/GO_TO_STEP", step);
           },
          goMortgageBackStep(){
            this.$store.commit("mortgage/GO_BACK_STEP",-1);
            this.$router.go(-1);
          },
          mapIncomingDataToForm(form, data) {
            // console.log(data);
            let ob = Object.entries(data);
            for (const [key, value] of ob) {
              if (key in form) {
                form[key] = value
              }
              //    form[key] = value;
            }

          },


    }
}
