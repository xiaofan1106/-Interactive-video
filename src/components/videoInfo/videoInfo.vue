<template>
  <el-card class="box-card" :class="{'hold': hold}">
    <div slot="header" class="video-header">
      <span class="title">视频分P</span>
      <i
        :class="[hold ? 'el-icon-arrow-left' : 'el-icon-arrow-right', 'icon']"
        @click="hold = !hold"
      ></i>
    </div>
    <el-input placeholder="按分P名搜索" v-model="movie" class="search">
      <i slot="suffix" class="el-icon-search"></i>
    </el-input>
    <div class="videos">
      <div v-for="(val, index) in searchMovies" :key="index" class="item" draggable="true">
        <div class="video-index">{{`P${index}`}}</div>
        <div class="video-title">{{val.name}}</div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "VideoInfo",
  data() {
    return {
      hold: false,
      movie: ""
    };
  },
  computed: {
    searchMovies() {
      return this.$store.getters.searchMovies(this.movie);
    }
  }
};
</script>
<style lang="scss">
.box-card {
  z-index: 1;
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
    width: 150px;
    height: 73px;
  }
  .video-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      margin-right: 3px;
      font-size: 18px;
      line-height: 25px;
      font-weight: 700;
      color: #212121;
    }
    .icon {
      display: inline;
      font-size: 14px;
      font-weight: 700;
      padding: 11px;
      cursor: pointer;
    }
  }
  .search {
    height: 32px;
    line-height: 32px;
    margin-bottom: 16px;
    input {
      height: 32px;
    }
  }
  .item {
    display: flex;
    margin-bottom: 16px;
    border-radius: 3px;
    overflow: hidden;
    user-select: none;
    .video-index {
      width: 32px;
      height: 30px;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      color: #2fb0db;
      background-color: #d1f3ff;
    }
    .video-title {
      flex: 1;
      padding-left: 6px;
      font-size: 13px;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #212121;
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
}
</style>
