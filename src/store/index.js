import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 电影列表
    movies: [{
        name: "first",
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      },
      {
        name: "second",
        url: "http://vjs.zencdn.net/v/oceans.mp4"
      },
      {
        name: "third",
        url: "https://media.w3.org/2010/05/sintel/trailer.mp4"
      },
      {
        name: "forth",
        url: "http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4"
      }
    ],
    // 配置列表
    curConfig: [{
      name: 'first',
      url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      canvas: [{
        name: "选项a",
        position: {
          top: 50,
          left: 50
        },
        depth: 1,
        index: 0
      }, {
        name: "选项a",
        position: {
          top: 50,
          left: 50
        },
        depth: 1,
        index: 1
      }],
      children: [
        {
          name: 'second',
          url: 'http://vjs.zencdn.net/v/oceans.mp4'
        },{
          name: 'third',
          url: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
        }
      ]
    }]
  },
  mutations: {},
  getters: {
    searchMovies: (state) => (movie) => {
      return state.movies.filter(item => item.name.includes(movie));
    },
    getCurConfig: (state) => (depth, index) => {
      let i = 0;
      let config = {};
      let cur = state.curConfig;
      while(i <= depth) {
        config = cur[index];
        cur = cur.children;
        if(!cur)
          return false;
        i++;
      }
      return config;
    }
  },
  actions: {},
  modules: {},
});
