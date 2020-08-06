import axios from "axios";

export default {

  getTest: function() {
    return axios.get("/api/test");
  },

  email: function(type) {
    return axios.post("/api/email", type);
  }
};
