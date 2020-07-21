<template>
  <div class="mask">
    <video v-if="curVideoUrl" :src='curVideoUrl' class="video"></video>
  </div>
</template>
<script>
export default {
  data(){
    return {
      depth: 0,
      index: 0,
      curVideoUrl: '',
      curVersion: {}
    }
  },
  created(){
    // 先写在这里，之后放到init里面
    // this.curVideoUrl = this.$store.getters.getConfig(0, 0).url;
    this.curVersion = this.$store.getters.getConfig(this.depth, this.index);
    this.curVideoUrl = this.curVersion.url;
    document.querySelector('video').addEventListener('ended', endEdCb);
  },
  methods: {
    // 这里负责切换视频url，blob？
    processTrans(){

    },
    // 这里绘制画板并作事件监听
    drawBtn(obj){
      
    },
    // 一小段视频播放完之后的回调
    endEdCb(){
      // 如果canvas有值
      let { canvas } = this.curVersion;
      if(canvas) {
        this.drawBtn(canvas);
      }else {
        // 结束播放
      }
    }
  }
}
</script>
<style lang="stylus">

</style>