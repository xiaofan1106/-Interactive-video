<template>
  <div class="editor-container">
    <div oncontextmenu="return false;" class="editor" style="cursor: default;">
      <canvas
        ref="canvas"
        id="mainCanvas"
        width="834"
        height="877"
        style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 70px; left: 0px; display: block;"
      ></canvas>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.canvas.width = document.body.clientWidth;
      this.$refs.canvas.height = document.body.clientHeight;
    })
  },
  methods: {
  }
};
</script>