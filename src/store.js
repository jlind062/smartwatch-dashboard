import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)
Vue.config.devtools = true
axios.defaults.withCredentials = false

export default new Vuex.Store({
  state: {
    user_name: "",
    coordinates: [],
    sensors: {},
    raw_data: {}
  },
  mutations: {
    SET_USERDATA (state, data) {
      state.user_name = data.properties.androidWearableDevice.name;
      state.coordinates = data.geometry.coordinates;
      state.raw_data = data
      
      // parse sensors and save to dict
      var sensors = data.properties.androidWearableDevice.sensorData;
      for (var i = 0; i < sensors.length; i++) {
        state.sensors[sensors[i][0].sensorName] = [sensors[i][1].sensorData, sensors[i][2].sensorUnit]
      }

      console.log(data);
    }
  },
  actions: {
    fetchUserData ({commit}) {
      axios
        .get("http://www.zerotrak.com/misc/ccps706/CCPS706-geojson1.json")
        .then(data => {
          commit('SET_USERDATA', data.data)
        } )
        .catch(error => {
          console.log(error)
        })
    },
    test () {
      console.log("testing")
    }
  },
  getters: {
    
  }
})
