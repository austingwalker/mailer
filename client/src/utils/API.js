import axios from "axios";

export default {

  getTest: function() {
    return axios.get("/api/test");
  },

  email: function(data) {
    return axios.post("/api/email", data);
  }
};
