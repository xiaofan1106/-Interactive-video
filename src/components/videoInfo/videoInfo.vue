<template>
  <el-card class="box-card" :class="{'hold': hold}">
    <div slot="header" class="video-header">
      <span class="title">视频分P</span>
      <i class="el-icon-arrow-left icon" @click="hold = !hold"></i>
    </div>
    <el-input placeholder="请输入名字" v-model="movie" class="search">
      <i slot="suffix" class="el-icon-search"></i>
    </el-input>
    <div class="videos">
      <el-card shadow="hover" v-for="(val, index) in searchMovies" :key="index">
        <div class="video-index">{{`P${index}`}}</div>
        <div class="video-title">{{val.name}}</div>
      </el-card>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "VideoInfo",
  data() {
    return {
      hold: false,
      movie: "",
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
    };
  },
  computed: {
    searchMovies() {
      return this.movies.filter(item => item.name.includes(this.movie));
    }
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  position: absolute;
  top: 70px;
  left: 10px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  width: 211px;
  height: 600px;
  &.hold {
    width: 107px;
    height: 58px;
  }
  .video-header {
    position: relative;
    display: flex;
    padding: 17px 10px;
    .title {
      margin-right: 3px;
      font-size: 18px;
      line-height: 25px;
      font-weight: 700;
      color: #212121;
    }
    .icon {
      position: absolute;
      top: 11px;
      right: 0;
      display: block;
      width: 14px;
      height: 14px;
      padding: 11px;
      box-sizing: content-box;
      cursor: pointer;
    }
  }
}
</style>