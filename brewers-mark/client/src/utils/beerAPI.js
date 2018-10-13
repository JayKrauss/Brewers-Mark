import axios from "axios";

export default {
  //    EXAMPLE:
  //     getItems: function() {
  //       return axios.get("/api/items");
  //     }

  getMultiple: function (searchData) {
    return axios.get("/api/beers/v2", { params: searchData });
  },

  getByName: function (name) {
    return axios.get("/api/beers/search/" + name);
  },

  getRandom: function () {
    return axios.get("/api/beers/random");
  },

  getById: function (id) {
    return axios.get("/api/beers/" + id);
  }

};