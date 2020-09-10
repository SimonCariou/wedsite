<template>
	<section id="footer" class="hero is-fullheight-with-navbar is-light">
  		<div class="hero-body has-text-centered">
  			<div class="container">
				<footer >
	   				<div class="footerItem toTop">
	   					<span class="scroll-next" @click="scrollTo()">
        					<div id="arrow-scroll-footer"></div>
      					</span>
	  					<p class="footerTitle">TO TOP</p>
	  				</div>
	  				<div class="footerItem">
	  					<p>------- svg rox -------</p>
	  				</div>
	  				<div class="footerItem">
	  					<p class="footerTitle">CONTACT</p>
		  				<p>40 rue Daguerre</p>
		  				<p>75014 Paris</p>
		  				<p><a mailTo="cariou.leval@orange.fr">cariou.leval@orange.fr</a></p>
		  				<p>+33 6 67 83 64 41</p>
		  				<p>+33 6 79 01 31 46</p>
	  				</div>
	  				<div class="footerItem">
	  					<p>------- svg rox -------</p>
	  				</div>
	  				<div class="footerItem">
		  				<p>Site fait par Simon avec ❤️</p>
		  				<p>Copyright Simon Cariou - 2020</p>
	  				</div>
					<div class="footerItem">
						<p class="footerBugReport">Pour tout report de bug: <a href="https://github.com/SimonCariou/wedsite/issues">ici</a></p>	
					</div>
	  			</footer>
  			</div>
  			
  		</div>
	</section>
</template>

<script>
export default {
  name: "AppFooter",
  mounted() {
  },
  methods: {
    scrollTo() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="sass" scoped>
#footer
  .footerItem
    padding-bottom: 1rem
    .footerTitle
      font-weight: 600
      font-size: 1.25rem
    .footerBugReport
      font-size: 0.75rem
  .toTop
    padding-bottom: 2rem
    padding-top: 3rem
  #arrow-scroll-footer,
  #arrow-scroll-footer:before
    position: absolute
    left: 50%
    cursor: pointer

  #arrow-scroll-footer
    width: 24px
    height: 24px
    top: 30px
    margin: -12px 0 0 -12px
    -webkit-transform: rotate(225deg)
    border-left: none
    border-top: none
    border-right: 2px #231E solid
    border-bottom: 2px #231E solid

  #arrow-scroll-footer:before
    content: ''
    width: 20px
    height: 20px
    top: 50%
    margin: -10px 0 0 -10px
    border-left: none
    border-top: none
    border-right: 1px #231E solid
    border-bottom: 1px #231E solid
    animation-duration: 2s
    animation-iteration-count: infinite
    animation-name: arrow

  @keyframes arrow
    0%
      opacity: 1
    100%
      opacity: 0
      transform: translate(-10px, -10px)
</style>