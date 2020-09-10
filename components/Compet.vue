<template>
  <div class="hero is-fullheight-with-navbar">
<!--  <iframe src="//cdn.witchhut.com/html5/games/pocket-wings-ww2/" scrolling="no" style="border:0; height:calc(100vh - 3.25rem)"></iframe> -->
<!--  <iframe src="//cdn.witchhut.com/html5/games/trick-hoops-puzzle-edition//" scrolling="no" style="border:0; height:calc(100vh - 3.25rem)"></iframe>-->
 <iframe src="//cdn.witchhut.com/html5/games/tog-jungle-runner/" scrolling="no" style="border:0; height:calc(100vh - 3.25rem)"></iframe>
  
  </div>
</template>

<style type="text/css" scoped>
body {
  margin: 0;
  padding: 0;
  background: #000;
}
canvas {
  display: block;
  margin: 0 auto;
  background: #fff;
}
</style>

<script>

export default {
  mounted() {
  },
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          'width=device-width, initial-scale=1 user-scalable=no, maximum-scale=1, user-scalable=0" '
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" }
    ]
  }
};
</script>
