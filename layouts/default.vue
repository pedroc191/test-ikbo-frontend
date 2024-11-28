<template>
	<div class="layout-default p-relative">
		<header-default></header-default>
		<div class="body-container p-realtive">
			<nuxt id="body-content"></nuxt>
			<div class="tap-top top-cls" v-scroll-to="'#body-content'">
				<i class="fa-solid fa-angle-double-up"></i>
			</div>
		</div>
		<footer-default></footer-default>
		<div v-if="getNotification" class="d-none"></div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Notification from '../components/pages/notification.vue';
export default {
	components: {
		headerDefault	: () => import( '../components/header/header-default.vue' ),
		footerDefault	: () => import( '../components/footer/footer-default.vue' )
	},
	data() {
		return {
			template_notification: null
		}
	},
	head() {
		return {
			title: 'Test IKBO - Pedro Camacaro',
		}
	},
	async mounted() {
		
		this.template_notification = Notification;
		window.addEventListener('scroll', this.handleScroll);
	},
	computed: {
		...mapGetters({
			getterNotification: 'getterNotification'
		}),
		getNotification(){
			if( this.getterNotification?.type == "error" && this.getterNotification?.body?.status == 403 ){
				
				this.logoutUser();
				this.$router.push('/account/login');
			}
			else if( this.getterNotification?.type == 'error' ){
				
				console.log( 'app-version' );
				console.log( 'app-version', this.$cookies.get('app-version') );
				let app_version = this.$cookies.get('app-version');
				if( app_version == undefined ){

					this.$cookies.set('app-version', this.getterNotification.body.app_version, { path: '/', maxAge: 60 * 60 * 24 * 7 });
				}
				if( this.getterNotification.body?.app_version ){
					
					if( this.getterNotification.body.app_version != app_version ){
						
						this.$cookies.set('app-version', this.getterNotification.body.app_version, { path: '/', maxAge: 60 * 60 * 24 * 7 });
						window.location.reload();
					}
				}
			}
			if( this.getterNotification?.body && this.getterNotification?.body.status != 403 ){
				
				let config_notification = {
					position: "top-right",
					timeout: 3000,
					closeOnClick: true,
					pauseOnFocusLoss: true,
					pauseOnHover: true,
					draggable: true,
					draggablePercent: 0.6,
					showCloseButtonOnHover: false,
					hideProgressBar: false,
					closeButton: "button",
					icon: true,
					rtl: false
				};
				const content = {
					component: this.template_notification,
					props: {
						title	: this.getterNotification.body.title,
						message	: this.getterNotification.body.message,
						content	: this.getterNotification.content
					}
				};
				
				this.$toast[this.getterNotification.type](content, config_notification);
				this.addNotification(null);
				
				return true;
			}
			else{
				return false;
			}
		}
	},
	methods: {
		...mapActions({
			getGeneralSettings	: 'getGeneralSettings',
			addNotification		: 'addNotification',
			logoutUser			: 'logoutUser',
			updateLoginUser		: 'updateLoginUser',
		}),
		handleScroll(event){
			
			for (const item_notification of document.getElementsByClassName("Vue-Toastification__container")) {
				
				if( window.innerWidth > 991 && window.top.scrollY >= 134 ){
					
					item_notification.style = "top: 12px !important;";
				}
				else{
					
					item_notification.style = "";
				}
			}
		}
	},
	beforeDestroy(){
		
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>
