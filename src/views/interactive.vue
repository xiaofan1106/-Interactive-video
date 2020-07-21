<template>
    <div class="main">
        <VideoInfo></VideoInfo>
        <VideoCanvas></VideoCanvas>
    </div>
</template>
<script>
import VideoInfo from '@/components/videoInfo/videoInfo.vue';
import VideoCanvas from '@/components/mainCanvas/videoCanvas.vue'

export default {
  data() {
    return {

    };
  },
  components: {
    VideoInfo,
    VideoCanvas
  },
};
</script>
<style lang="scss" scoped>
</style>
