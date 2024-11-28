<template>
	<header id="header-default" :class="{ 'hide-header': effect_header, 'fixed-header': fixed_header }">
		<div class="mobile-fix-option"></div>
		<topbar-default layout="default"></topbar-default>
		<b-container>
			<b-row>
				<b-col cols="12">
					<div class="main-menu">
						<div class="menu-left">
							<h1 class="visible-handling">Test IKBO - Pedro Camacaro</h1>
							<div class="navbar">
								<div v-if="showNavbar" @click="executeOpenSidebar">
									<div class="bar-style">
										<i class="fa-solid fa-bars sidebar-bar"></i>
									</div>
								</div>
							</div>
							<div class="store-logo">
								<a href='/' class="logo-link" title="Test IKBO - Pedro Camacaro" aria-label="We are a company dedicated to the wholesale market, distributing recognized products of the highest quality around the world.">
									<img src="/logo-admin.png" alt="Test IKBO - Pedro Camacaro" title="Test IKBO - Pedro Camacaro" class="img-fluid" />
								</a>
							</div>
						</div>
						<div class="menu-right">
							<nav-bar-default v-if="!showNavbar"></nav-bar-default>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<sidebar v-if="showNavbar" layout="default" :openSidebar="openSidebar" @closeSidebar="closeSidebar"></sidebar>
	</header>
</template>
<script>
export default {
	components: {
		topbarDefault	: () => import('../topbar/topbar-default.vue'),
		sidebar			: () => import('../header/sidebar.vue'),
		navBarDefault	: () => import('../navbar/navbar-default.vue')
	},
	data() {
		
		return {
			openSidebar			: false,
			fixed_header		: false,
			effect_header		: false,
			show_navbar			: false
		}
	},
	async mounted(){
		
		window.addEventListener('load', this.evalShowNavbar);
		window.addEventListener('resize', this.evalShowNavbar);
		window.addEventListener('scroll', this.evalShowNavbar);
		this.$root.$on('close-sidebar', this.closeSidebar);
	},
	computed: {
		showNavbar(){
			return this.show_navbar;
		}
	},
	methods: {
		evalShowNavbar( event ) {
			this.show_navbar = window.innerWidth <= 1200;
		},
		executeOpenSidebar() {
			this.openSidebar = true
		},
		closeSidebar(isOpenSidebar) {
			this.openSidebar = isOpenSidebar
		}
	}
}
</script>
