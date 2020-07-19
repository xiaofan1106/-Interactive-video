import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 电影列表
    movies: [
      {
        name: "test1",
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      },
      {
        name: "test2",
        url: "http://vjs.zencdn.net/v/oceans.mp4"
      },
      {
        name: "test3",
        url: "https://media.w3.org/2010/05/sintel/trailer.mp4"
      },
      {
        name: "test4",
        url:
          "http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
