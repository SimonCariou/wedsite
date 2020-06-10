<template>
  <div class="hero is-fullheight-with-navbar">
    <!-- Place this code where you'd like the game to appear 
        <iframe
          src="//www.miniclip.com/games/penguin-push/fr/webgame.php?bodybg=5&amp;width=100%&amp;height=408&amp;forcecredits=null"
          width="100%"
          height="408"
          frameborder="0"
          scrolling="no"
          style="border:none;"
          allowfullscreen
        ></iframe>
    -->
    <canvas></canvas>
  </div>
</template>

<style type="text/css">
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
