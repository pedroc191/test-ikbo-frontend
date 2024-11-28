<template>
	<div id="mySidenav" class="sidenav" :class="{ 'open-sidebar': openSidebar }">
		<div class="sidebar-overlay" @click="executeCloseSidebar()"></div>
		<nav v-if="openSidebar">
			<a @click="executeCloseSidebar()">
				<div class="sidebar-back text-left">
					<span>
						<i class="fa-solid fa-angle-left pr-2"></i>
					</span> Back
				</div>
			</a>
			<!-- Sample menu definition -->
			<ul id="sub-menu" class="sidebar-menu">
				<li v-if="getterLogin">
					<ul class="onhover-show-div card-profile">
						<li class="content-customer-insigne justify-content-center">
							<profile-image position="sidebar" :getterLevel="getterLevel"></profile-image>
						</li>
						<li class="item-card-profile name-card-profile">
							{{getterUser?.name}}
						</li>
						<li class="item-card-profile">Level: <strong class="ml-1">{{ getterLevel?.level.name }}</strong></li>
						<li class="item-card-profile">{{getterUser?.email}}</li>
						<li class="item-card-profile item-options-card">
							<nuxt-link class="item-option-card" :to="{ path: '/account/dashboard' }" :custom="true" v-slot="{href, navigate}">
								<a :href="href" @click="selectLinkSidebar($event, navigate)">
									<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" version="1.1" viewBox="0 0 490 420">
										<g style="transform: translate(-110px, -60px);">
											<path d="m350 485.3c-31.398 0-61.012-2.5273-83.371-7.1055-27.945-5.7305-40.949-13.828-40.949-25.496 0-13.848 18.77-20.16 32.895-23.672 17.168-4.2969 40.977-7.2812 67.027-8.3984 4.9492-0.21484 9.1328 3.6211 9.3477 8.5703 0.21484 4.9453-3.6211 9.1328-8.5703 9.3477-22.434 0.97266-42.598 3.2891-58.312 6.6914-13.242 2.8711-19.633 5.7305-22.586 7.4883 3.4883 2.0898 11.801 5.7109 30.527 9.043 20.438 3.5898 46.727 5.6133 73.992 5.6133s53.559-2.0039 74.008-5.6406c18.727-3.332 27.031-6.957 30.52-9.043-2.9531-1.7578-9.3398-4.6133-22.586-7.4883-15.715-3.4062-35.875-5.7188-58.309-6.6914h0.003907c-4.9492-0.21484-8.7852-4.4023-8.5703-9.3477 0.21484-4.9492 4.4023-8.7891 9.3477-8.5742 26.051 1.1211 49.84 4.1172 67.027 8.3984 14.117 3.5273 32.891 9.8242 32.891 23.672 0 11.672-13.016 19.77-40.953 25.496-22.34 4.6133-51.973 7.1367-83.379 7.1367z"></path>
											<path d="m374.02 461.66h-48.047c-4.9492 0-8.9609-4.0117-8.9609-8.9609v-69.957c0-4.9492 4.0117-8.9609 8.9609-8.9609h48.047c2.375 0 4.6562 0.94531 6.3359 2.625s2.625 3.9609 2.625 6.3359v69.957c0 2.375-0.94531 4.6562-2.625 6.3359-1.6797 1.6797-3.9609 2.625-6.3359 2.625zm-39.09-17.922h30.129v-52.035h-30.125z"></path>
											<path d="m574 391.7h-448c-4.9492 0-8.9609-4.0117-8.9609-8.9609v-299.08c0-4.9492 4.0117-8.9609 8.9609-8.9609h448c2.375 0 4.6562 0.94141 6.3359 2.625 1.6797 1.6797 2.625 3.957 2.625 6.3359v299.08c0 2.3789-0.94531 4.6562-2.625 6.3359-1.6797 1.6797-3.9609 2.625-6.3359 2.625zm-439.04-17.922h430.08v-281.16h-430.08z"></path>
											<path d="m246.9 310.11c-42.41 0-76.91-34.5-76.91-76.91 0-42.406 34.504-76.91 76.91-76.91 42.41 0 76.91 34.504 76.91 76.91 0 42.41-34.5 76.91-76.91 76.91zm0-135.9v0.003907c-15.645 0-30.648 6.2148-41.711 17.277s-17.277 26.066-17.277 41.711c0 15.648 6.2148 30.652 17.277 41.715s26.066 17.277 41.711 17.277c15.648 0 30.652-6.2148 41.715-17.277s17.277-26.066 17.277-41.715c-0.019531-15.637-6.2422-30.633-17.301-41.691-11.059-11.059-26.051-17.277-41.691-17.297z"></path>
											<path d="m314.86 242.16h-67.953c-4.9453 0-8.957-4.0117-8.957-8.9609v-67.949c0-4.9492 4.0117-8.9609 8.957-8.9609 4.9492 0 8.9609 4.0117 8.9609 8.9609v58.992h58.992c4.9492 0 8.957 4.0117 8.957 8.957 0 4.9492-4.0078 8.9609-8.957 8.9609z"></path>
											<path d="m280.89 301.02c-3.207 0.003906-6.168-1.7031-7.7695-4.4805l-33.996-58.855c-2.4766-4.2852-1.0078-9.7656 3.2812-12.242 4.2852-2.4727 9.7656-1.0039 12.242 3.2852l33.977 58.855h-0.003906c1.6016 2.7695 1.6016 6.1836 0.003906 8.957-1.6016 2.7734-4.5586 4.4805-7.7578 4.4805z"></path>
											<path d="m519.42 320.39c-4.9492 0-8.9609-4.0117-8.9609-8.9609v-53.832c0-4.9492 4.0117-8.9609 8.9609-8.9609s8.957 4.0117 8.957 8.9609v53.848c-0.007812 4.9414-4.0156 8.9453-8.957 8.9453z"></path>
											<path d="m475.74 320.39c-4.9492 0-8.9609-4.0117-8.9609-8.9609v-54.098c0-4.9492 4.0117-8.9609 8.9609-8.9609 4.9492 0 8.9609 4.0117 8.9609 8.9609v54.098c0 2.375-0.94531 4.6562-2.625 6.3359-1.6797 1.6797-3.9609 2.625-6.3359 2.625z"></path>
											<path d="m383.89 320.39c-4.9492 0-8.9609-4.0117-8.9609-8.9609v-47.672c0-4.9492 4.0117-8.9609 8.9609-8.9609s8.9609 4.0117 8.9609 8.9609v47.684c-0.007812 4.9414-4.0156 8.9492-8.9609 8.9492z"></path>
											<path d="m430.55 320.39c-4.9492 0-8.9609-4.0117-8.9609-8.9609v-72.441c0-4.9492 4.0117-8.9609 8.9609-8.9609s8.9609 4.0117 8.9609 8.9609v72.441c0 2.375-0.94531 4.6562-2.625 6.3359-1.6797 1.6797-3.9609 2.625-6.3359 2.625z"></path>
											<path d="m383.89 223.87c-3.625 0-6.8906-2.1836-8.2773-5.5312-1.3867-3.3477-0.62109-7.1992 1.9375-9.7656l38.605-38.641 0.003906 0.003906c3.1758-3.1875 8.2266-3.5195 11.797-0.78125l37.457 28.766 49.281-49.281v0.003906c3.5273-3.2734 9.0117-3.1758 12.418 0.22266 3.4102 3.3945 3.5273 8.8789 0.26562 12.418l-54.852 54.879c-2.5625 2.5625-6.418 3.332-9.7656 1.9414-0.77734-0.31641-1.5-0.74609-2.1562-1.2695l-37.328-28.672-33.039 33.074h-0.003906c-1.6797 1.6836-3.9609 2.6328-6.3438 2.6328z"></path>
											<path d="m518.7 200.79h-0.55859-0.003907c-2.3711-0.15234-4.5859-1.2422-6.1523-3.0273-1.5703-1.7852-2.3672-4.1211-2.2109-6.4922l1.6797-26.707-26.699 1.7148h-0.003906c-4.9375 0.30859-9.1914-3.4453-9.5039-8.3828-0.30859-4.9414 3.4453-9.1953 8.3867-9.5039l36.871-2.3594h-0.003906c2.5742-0.16406 5.0938 0.78516 6.9141 2.6055 1.8242 1.8242 2.7734 4.3438 2.6094 6.918l-2.3594 36.863c-0.30859 4.7188-4.2344 8.3867-8.9648 8.3711z"></path>
										</g>
									</svg>
									<span class="d-flex justify-content-center align-items-center mt-2">Dashboard</span>
								</a>
							</nuxt-link>
							<hr class="item-option-card-separator"/>
							<a class="item-option-card" @click="logout">
								<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 23.806 23.95">
									<g data-name="ico-log out" transform="translate(871.294 1093.75)">
										<path id="Path_334" data-name="Path 334" d="M341.6,1262.568h-9.146a2.209,2.209,0,0,1-2.4-1.942V1242.06a2.209,2.209,0,0,1,2.4-1.942H341.6" transform="translate(-1200.593 -2333.118)" fill="none" stroke="#303030" stroke-linecap="round" stroke-width="1.5"></path>
										<g id="Group_444" data-name="Group 444" transform="translate(-36)">
											<path id="Path_335" data-name="Path 335" d="M-826.092-1081.775h13.721" fill="none" stroke="#303030" stroke-linecap="round" stroke-width="1.5"></path>
											<path id="Path_336" data-name="Path 336" d="M-818.531-1088.062l6.293,6.293-6.293,6.293" fill="none" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
										</g>
									</g>
								</svg>
								<span class="d-flex justify-content-center align-items-center mt-2">Logout</span>
							</a>
						</li>
					</ul>
				</li>
				<li v-for="(item_menu, index_menu) in getNavigation" :key="`menu-${ index_menu }`" :class="item_menu.mega_menu ? 'mega-menu' : 'dropdown'">
					<navbar-item :type_menu="'mobile'" :item_menu="item_menu" :index_menu="index_menu"></navbar-item>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import json_navigation       from '../../assets/documents/navigation.json';
export default {
	props: ['layout', 'openSidebar'],
	components:{
		navbarItem: () => import('../../components/navbar/navbar-item.vue'),
		profileImage: () => import('../../components/account/profile-image.vue')
	},
	data() {
		return {
			navigation		: json_navigation
		}
	},
	mounted() {
	},
	computed:{
		...mapGetters({
			getterLogin			: 'getterLogin',
			getterUser			: 'getterUser'
		}),
		getNavigation(){
			return this.navigation;
		}
	},
	methods: {
		...mapActions({
			logoutUser: 'logoutUser'
		}),
		executeCloseSidebar(value) {
			this.$root.$emit('close-sidebar', false);
		},
		logout() {
			this.logoutUser();
			this.$router.go();
		},
	}
}
</script>
