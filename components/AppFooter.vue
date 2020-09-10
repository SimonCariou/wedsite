<template>
	<section id="footer" class="hero is-fullheight-with-navbar is-light">
  		<div class="hero-body has-text-centered">
  			<div class="container">
				<footer >
	   				<div class="footerItem"> 
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
  name: "AppFooter"
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

</style>