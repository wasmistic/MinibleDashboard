export default {

  register() {
    return "auth/register";
  },
  login() {
    return "auth/login";
  },
  forgotPassword() {
    return 'auth/forgot-password'
  },
  changePassowrdByForgot() {
    return 'auth/change-password-code'
  },

  getProfileInfo() {
    return 'auth/profile'
  },
  verifyUserEmail() {
    return 'user/verify-account'
  },
  resendCode() {
    return 'user/resend-code'
  },
  getUserProfile() {
    return "user/get-profile"
  },
  updateProfileInfo() {
    return 'user/profile'
  },
  updateAffordabilityInfo() {
    return 'user/affordability-test'
  },
  propertyBelowPrice(price) {
    return "general/property-below-price/" + price
  },
  propertiesSuggestion() {
    return "general/properties-suggestion"
  },
  allStates() {
    return "general/all-states"
  },
  allCitiesInState(state_id) {
    return "general/all-cities/" + state_id
  },
  allPaymentOption() {
    return "general/finance-option"
  },
  allPropertyTypes() {
    return "general/all-general-properties-types"
  },
  policeRanks() {
    return "general/ranks"
  },

  saveUserRequest() {
    return "user/property-request"
  },
  //dashboard
  userMortgageStatus() {
    return "user/get-user-current-mortgage"
  },
  userMortgageList() {
    return "user/user-mortgage-status"
  },
  userMortgageDetail(slug) {
    return "user/user-mortgage-detail/" + slug
  },
  userDocumentCount() {
    return "user/document-count"
  },
  userPropertyRequest() {
    return "user/get-user-request"
    // return "user/user-property-request"
  },
  userFileList() {
    return "user/user-files"
  },
  userUploadFile() {
    return "user/user-upload-file"

  },
  userUploadFileFromClient() {
    return "user/user-upload-file-client"

  },
  userDeleteFile(id) {
    return "user/user-delete-file/" + id
  },
  getUserRequest() {
    return "user/get-user-request";
  },
  userApplyForMortgage() {
    return "user/apply-mortgage";
  },
  userAgreeToMortgage() {
    return "user/agree-to-terms";
  }




}
