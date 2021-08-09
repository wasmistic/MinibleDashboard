import api from '@/services/api'
export const state = () => ({
  document_count: '',
  // mortgage_status: '',
  // mortgages_list: [],
  property_request: '',
  // mortgage_details: '',
  document_list: []
})
export const mutations = {
  DOCUMENT_COUNT(state, payload) {
    state.document_count = payload
  },
  DOCUMENT_LIST(state, payload) {
    state.document_list = payload
  },
  // MORTGAGE_STATUS(state, payload) {
  //   state.mortgage_status = payload
  // },
  // MORTGAGE_LIST(state, payload) {
  //   state.mortgages_list = payload
  // },
  // MORTGAGE_DETAIL(state, payload) {
  //   state.mortgage_details = payload
  // },
  PROPERTY_REQUEST(state, payload) {
    state.property_request = payload
  },


}
export const actions = {
  async getDocumentCountAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userDocumentCount());
    let r = res.data.data;
    console.log("document count: ", r)
    commit("DOCUMENT_COUNT", r);
    return r;
  },
  async getDocumentListAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userFileList());
    let r = res.data;
    console.log("document list: ", r)
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async getUploadDocumentAction({
    commit
  }) {
    let res = await this.$axios.$post(api.userUploadFile());
    let r = res.data;
    console.log("document upload: ", r)
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async uploadDocumentAction({
    commit
  }, form) {
    let res = await this.$axios.$post(api.userUploadFileFromClient(), form);
    let r = res.data;
    console.log("document upload: ", r)
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async getdeleteDocumentAction({
    commit
  }, id) {
    let res = await this.$axios.$get(api.userDeleteFile(id));
    let r = res.data;
    console.log("document deleted: ", r)
    // commit("DOCUMENT_LIST",r);
    return r;
  },

  async getUserPropertyRequestAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userPropertyRequest());
    let r = res.data;
    console.log("property request: ", r)
    commit("PROPERTY_REQUEST", r);
    return r;
  }
}
export const getters = {}
