<template>
	<div class="top-header">
		<b-container>
			<b-row>
				<b-col cols="4" class="header-contact">
					<ul>
						<li>Welcome to Test IKBO - Pedro Camacaro</li>
					</ul>
				</b-col>
				<b-col :cols="layout == 'default' && getterLogin ? 0 : 10" 	:md="layout == 'default' && getterLogin ? 6 : 10" 	:lg="4" :xl="4" :class="`header-search${ layout == 'default' && getterLogin ? ' login-user' : '' }`">
					
				</b-col>
				<b-col :cols="2" 											:md="layout == 'default' && getterLogin ? 6 : 2" 	:lg="4" :xl="4" :class="`header-account${ layout == 'default' && getterLogin ? ' login-user' : '' }`">
					<div class="header-dropdown row m-0">
						
						<div v-if="layout == 'default' && getterUser && getterLogin" class="mobile-account onhover-dropdown">
							<div class="content-top-profile-image d-flex justify-content-end ml-2">
								<div class="open-dashboard d-flex">
									<div class="position-relative d-inline-flex">
										<profile-image position="topbar"></profile-image>
									</div>
									<span class="d-flex align-item-center">
										<span class="w-100 chunk-lines chunk-lines-1 pr-1 customer-name" :title="`Hello, ${ getterUser.name }`"><strong>Hello</strong>, {{ getterUser.name }}</span>
									</span>
								</div>
								<ul class="onhover-show-div card-profile box-shadow p-0">
									<b-row class="customer-menu-options m-0">
										<b-col cols="12" class="content-customer-insigne justify-content-center">
											<profile-image position="menu"></profile-image>
										</b-col>
										<b-col cols="12" class="item-card-profile name-card-profile text-center">
											{{ getterUser.name }}
										</b-col>
										<b-col cols="12" class="customer-option mb-0 last-childs">
											<nuxt-link class="d-flex w-100 align-items-center font-weight-normal" :to="{ path: '/pages/product' }">
												<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23.46 24.222">
													<g transform="translate(5248.061 15428.229)">
														<path id="Path_316" data-name="Path 316" d="M-5247.311-15422.924h21.7l-2.857-4.555H-5244.3Z" fill="none" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
														<path id="Path_317" data-name="Path 317" d="M-5247.311-15422.573v17.781h21.96v-17.781" transform="translate(0 0.035)" fill="none" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
														<line id="Line_38" data-name="Line 38" x2="8.059" transform="translate(-5243.491 -15411.381)" fill="none" stroke="#303030" stroke-linecap="round" stroke-width="1.5"></line>
														<line id="Line_39" data-name="Line 39" x2="6.044" transform="translate(-5243.491 -15408.36)" fill="none" stroke="#303030" stroke-linecap="round" stroke-width="1.5"></line>
													</g>
												</svg>
												Products
											</nuxt-link>
										</b-col>
										<b-col cols="12" class="customer-option">
											<nuxt-link class="d-flex w-100 align-items-center font-weight-normal" :to="{ path: '/pages/inventory' }">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32.282 23.064">
													<g id="ico-orders" transform="translate(-385.832 -1235.991)">
														<g id="Group_35" data-name="Group 35" transform="translate(396.525 1236.491)">
															<path id="Path_54" data-name="Path 54" d="M111.982,72.2h21.09V59a1.873,1.873,0,0,0-1.871-1.871H113.854A1.873,1.873,0,0,0,111.982,59Zm20.472-.617H112.6V59a1.256,1.256,0,0,1,1.254-1.254H131.2A1.255,1.255,0,0,1,132.454,59Z" transform="translate(-111.982 -57.125)" fill="none" stroke="#303030" stroke-width="1"></path>
														</g>
														<g id="Group_36" data-name="Group 36" transform="translate(389.992 1250.793)">
															<path id="Path_55" data-name="Path 55" d="M148.032,88a3.881,3.881,0,1,0-3.881-3.881A3.886,3.886,0,0,0,148.032,88Zm0-7.144a3.263,3.263,0,1,1-3.264,3.263A3.267,3.267,0,0,1,148.032,80.858Z" transform="translate(-144.151 -80.241)" fill="none" stroke="#303030" stroke-width="1"></path>
														</g>
														<g id="Group_37" data-name="Group 37" transform="translate(406.534 1250.948)">
															<path id="Path_56" data-name="Path 56" d="M121.414,88.1a3.75,3.75,0,1,0-3.75-3.75A3.754,3.754,0,0,0,121.414,88.1Zm0-6.883a3.133,3.133,0,1,1-3.132,3.133A3.136,3.136,0,0,1,121.414,81.22Z" transform="translate(-117.664 -80.603)" fill="none" stroke="#303030" stroke-width="1"></path>
														</g>
														<g id="Group_38" data-name="Group 38" transform="translate(386.915 1241.537)">
															<path id="Path_57" data-name="Path 57" d="M149.736,72.409h7.391V65.3h-.617v6.493h-6.773Z" transform="translate(-149.736 -65.299)" fill="none" stroke="#303030" stroke-width="1"></path>
														</g>
														<g id="Group_39" data-name="Group 39" transform="translate(397.445 1254.334)">
															<rect id="Rectangle_21" data-name="Rectangle 21" width="9.339" height="0.617" fill="none" stroke="#303030" stroke-width="1"></rect>
														</g>
														<g id="Group_40" data-name="Group 40" transform="translate(413.928 1251.554)">
															<path id="Path_58" data-name="Path 58" d="M113.938,84.884h2.479v-3.36H115.8v2.743h-1.862Z" transform="translate(-113.938 -81.524)" fill="none" stroke="#303030" stroke-width="1"></path>
														</g>
														<g id="Group_41" data-name="Group 41" transform="translate(404.404 1251.443)">
															<rect id="Rectangle_22" data-name="Rectangle 22" width="0.617" height="3.051" fill="none" stroke="#303030" stroke-width="1"></rect>
														</g>
														<g id="Group_42" data-name="Group 42" transform="translate(399.642 1251.368)">
															<rect id="Rectangle_23" data-name="Rectangle 23" width="0.617" height="3.162" fill="none" stroke="#303030" stroke-width="1"></rect>
														</g>
														<g id="Group_45" data-name="Group 45" transform="translate(386.332 1241.006)">
															<path id="Path_61" data-name="Path 61" d="M148.552,78.945a8.266,8.266,0,0,0,1.1-.08l.342-.109-.2-.585-.284.1a3.327,3.327,0,0,1-2.582-.36.766.766,0,0,1-.3-.518V69.87l4.162-4.815h5.49v-.617h-5.772l-4.5,5.2v7.752a1.34,1.34,0,0,0,.489.964A3.027,3.027,0,0,0,148.552,78.945Z" transform="translate(-146.018 -64.438)" fill="none" stroke="#303030" stroke-width="1"></path>
														</g>
													</g>
												</svg>
												Inventory
											</nuxt-link>
										</b-col>
									</b-row>
									<b-row class="customer-menu-options border-footer m-0">
										<b-col cols="6" class="customer-option m-0 last-childs">
											<nuxt-link class="d-flex w-100 align-items-center font-weight-normal" :to="{ path: '/account/forgot-password' }">
												<svg xmlns="http://www.w3.org/2000/svg" width="22.64" height="22.673" viewBox="0 0 22.64 22.673">
													<g transform="translate(-17.884 -12.94)">
														<path id="Path_326" data-name="Path 326" d="M43.036,46.759l1.895-1.895a6.487,6.487,0,1,0-4.255-4.255l-8.11,8.144a.585.585,0,0,0-.2.432l-.166,3.49a.676.676,0,0,0,.2.5.656.656,0,0,0,.465.2H32.9l3.49-.166a.6.6,0,0,0,.6-.5l.632-2.327,2.194-.532a.749.749,0,0,0,.5-.5l.5-2.161,1.861-.266A.534.534,0,0,0,43.036,46.759Z" transform="translate(-13.566 -18.51)" fill="none" stroke="#303030" stroke-width="1.5"></path>
														<path id="Path_327" data-name="Path 327" d="M72.454,46.983a.643.643,0,0,0,.931,0A3.6,3.6,0,0,0,68.3,41.9a.643.643,0,0,0,0,.931Z" transform="translate(-37.533 -24.285)" fill="none" stroke="#303030" stroke-width="1.5"></path>
													</g>
												</svg>
												Change Password
											</nuxt-link>
										</b-col>
										<b-col cols="6" class="customer-option m-0 last-childs">
											<a class="d-flex w-100 align-items-center font-weight-normal" @click="logout">
												<svg xmlns="http://www.w3.org/2000/svg" width="23.806" height="23.95" viewBox="0 0 23.806 23.95">
													<g data-name="ico-log out" transform="translate(871.294 1093.75)">
														<path id="Path_334" data-name="Path 334" d="M341.6,1262.568h-9.146a2.209,2.209,0,0,1-2.4-1.942V1242.06a2.209,2.209,0,0,1,2.4-1.942H341.6" transform="translate(-1200.593 -2333.118)" fill="none" stroke="#303030" stroke-linecap="round" stroke-width="1.5"></path>
														<g id="Group_444" data-name="Group 444" transform="translate(-36)">
															<path id="Path_335" data-name="Path 335" d="M-826.092-1081.775h13.721" fill="none" stroke="#303030" stroke-linecap="round" stroke-width="1.5"></path>
															<path id="Path_336" data-name="Path 336" d="M-818.531-1088.062l6.293,6.293-6.293,6.293" fill="none" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
														</g>
													</g>
												</svg>
												Logout
											</a>
										</b-col>
									</b-row>
								</ul>
							</div>
						</div>
						<div v-if="layout == 'single-page' || !getterLogin" class="mobile-account">
							<a href="/account/login" class="login-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 22 22" style="background-color: #303030; border-radius: 50%;">
									<g id="Grupo_4" data-name="Grupo 4" transform="translate(215.304 -267.035)" fill="#303030">
										<path id="Trazado_5" data-name="Trazado 5" d="M-192.652,279.259c-.085.53-.136,1.065-.256,1.589a11.3,11.3,0,0,1-2.628,5.089c-.315.353-.66.673-1,1a.236.236,0,0,1-.375.018,2.3,2.3,0,0,0-.491-.3c-1.108-.553-2.209-1.118-3.324-1.656a1.645,1.645,0,0,1-1.008-1.611,2.69,2.69,0,0,1,.551-1.941,5.111,5.111,0,0,0,.862-1.758.438.438,0,0,1,.235-.271,1.056,1.056,0,0,0,.628-1.008c-.007-.5-.006-1,0-1.5a.973.973,0,0,0-.243-.691.473.473,0,0,1-.121-.342c0-.685,0-1.371,0-2.056a2.854,2.854,0,0,0-2.1-3.019,6.408,6.408,0,0,0-4.274.064,2.83,2.83,0,0,0-1.93,2.851c.005.707,0,1.415.006,2.122a.532.532,0,0,1-.141.4.835.835,0,0,0-.221.587c0,.56,0,1.12,0,1.68a.94.94,0,0,0,.341.717.769.769,0,0,1,.231.39,7.292,7.292,0,0,0,1.185,2.429.544.544,0,0,1,.111.348c0,.383-.006.767,0,1.149a1.349,1.349,0,0,1-.738,1.288c-.923.509-1.848,1.011-2.772,1.517a6.661,6.661,0,0,0-1,.6c-.116.093-.193.058-.286-.025a12.06,12.06,0,0,1-1.829-2.032,10.93,10.93,0,0,1-2-5.274,11.085,11.085,0,0,1,2.528-8.445,10.869,10.869,0,0,1,6.436-3.886,11.016,11.016,0,0,1,9.51,2.359,11.1,11.1,0,0,1,4.017,7.13c.038.239.064.48.1.72Z" transform="translate(0)" fill="#FFFFFF"></path>
									</g>
								</svg>
								Login
							</a>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	props: ["layout"],
	data() {
		return {
			showResults	: false,
			searchText	: '',
			openSearch	: false,
			showSearch	: false
		}
	},
	components: {
		profileImage	: () => import('../account/profile-image.vue')
	},
	async mounted() {
		
		window.addEventListener('load', this.resizewindow);
		window.addEventListener('resize', this.resizewindow);
	},
	computed: {
		...mapGetters({
			getterLogin				: 'getterLogin',
			getterUser				: 'getterUser',
		})
	},
	methods: {
		...mapActions({
			logoutUser		: 'logoutUser',
		}),
		resizewindow(event){
			this.openSearch = window.innerWidth <= 1200;
		},
		logout() {
			this.logoutUser();
			this.$router.push('/');
		}
	}
}
</script>
