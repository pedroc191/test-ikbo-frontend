
<template>
	<section class="login-page section-b-space pt-0">
		<breadcrumbs type="account" title="Login"></breadcrumbs>
		<b-container class="pt-4">
			<b-row class="justify-content-center align-items-center">
				<b-col cols="12" lg="6">
					<h3>Login</h3>
					<div class="theme-card shadow-sm">
						<validation-observer tag="div" v-slot="{ handleSubmit, valid, reset, errors }" class="custom-form">
							<b-form class="custom-form" @submit.prevent="handleSubmit( onSubmitLogin )" @reset.prevent="reset">
								<vc-form-field label="Email" field_id="email" field_name="email" field_type="email" :field_value="getLoginUser.email" valid_rules="required|email" class="mb-4"></vc-form-field>
								<vc-form-field label="Password" field_id="password" field_name="password" field_type="password" :field_value="getLoginUser.password" valid_rules="required" class="mb-4"></vc-form-field>
								<div class="login-buttons d-flex justify-content-between align-items-center">
									<button type="submit" class="btn btn-solid shadow-sm" :disabled="valid == false">Login</button>
									<nuxt-link :to="{ path: '/account/forgot-password' }">Forgot your Password ?</nuxt-link>
								</div>
								<div class="login-buttons d-flex justify-content-center align-items-center mt-4">
									<button type="button" class="btn btn-solid shadow-sm" @click="showRegisterUser = !showRegisterUser">New User</button>
								</div>
							</b-form>
						</validation-observer>
					</div>
				</b-col>
			</b-row>
			<b-row :class="`register-user-form justify-content-center align-items-center mt-4${ getShowRegisterUser ? ' show' : '' }`">
				<b-col cols="12" lg="6">
					<h3>Register User</h3>
					<div class="theme-card shadow-sm">
						<validation-observer tag="div" v-slot="{ handleSubmit, valid, reset, errors }" class="custom-form">
							<b-form class="custom-form" @submit.prevent="handleSubmit( onSubmitRegister )" @reset.prevent="reset">
								<vc-form-field label="First Name" field_id="first_name" field_name="first_name" field_type="text" :field_value="getNewUser.first_name" valid_rules="required" class="mb-4"></vc-form-field>
								<vc-form-field label="Last Name" field_id="last_name" field_name="last_name" field_type="text" :field_value="getNewUser.last_name" valid_rules="required" class="mb-4"></vc-form-field>
								<vc-form-field label="Email" field_id="new_email" field_name="new_email" field_type="email" :field_value="getNewUser.new_email" valid_rules="required|email" class="mb-4"></vc-form-field>
								<vc-form-field label="Password" field_id="new_password" field_name="new_password" field_type="password" :field_value="getNewUser.new_password" valid_rules="required" class="mb-4"></vc-form-field>
								<div class="login-buttons d-flex justify-content-center align-items-center">
									<button type="submit" class="btn btn-solid shadow-sm" :disabled="valid == false">Register</button>
									<b-button :id="`reset-form-user`" type="reset" class="d-none">Reset Form</b-button>
								</div>
							</b-form>
						</validation-observer>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	components: {
		breadcrumbs	: () => import( '../../components/pages/breadcrumbs.vue' ),
		vcFormField	: () => import("../../components/pages/form-field.vue")
	},
	data() {
		return {
			newLoginUser:{
				email	: "",
				password: ""
			},
			newUser: {
				first_name	: "",
				last_name	: "",
				new_email	: "",
				new_password: "",
				role: "admin-test-ikbo"
			},
			showRegisterUser: false
		}
	},
	computed: {
		...mapGetters({
			getterLogin			: 'getterLogin',
			getterUser			: 'getterUser',
			getterNotification	: 'getterNotification'
		}),
		isAvailableLogin(){
			return this.availableLogin;
		},
		getLoginUser(){
			return this.newLoginUser;
		},
		getNewUser(){
			return this.newUser;
		},
		getShowRegisterUser(){
			return this.showRegisterUser;
		}
	},
	mounted(){
		this.$root.$on('update-field-value', this.updateFieldValue);
		if ( this.getterLogin ) {
			
			this.$router.push("/");
		}
	},
	methods: {
		...mapActions({
			loginUser: "loginUser",
			createUser: "createUser",
		}),
		updateFieldValue(data){
			if( this.newUser[data.field] != undefined ){
				
				this.newUser[data.field] = data.value;
			}
			if( this.newLoginUser[data.field] != undefined ){
				
				this.newLoginUser[data.field] = data.value;
			}
		},
		async onSubmitLogin() {
			await this.loginUser( this.getLoginUser ).then( (result_user) => {
				
				this.availableLogin = false;
				if( this.getterUser ){
					
					this.$root.$emit('login-user', true);
					this.$root.$emit("show-desktop-search", false);
					this.$root.$emit("show-desktop-search", true);
					
					document.getElementById(`reset-form-user`).click();
					this.newLoginUser = {
						email	: "",
						password: ""
					}
					
					this.$router.push('/pages/inventory');
				}
			});
		},
		async onSubmitRegister() {
			await this.createUser( this.getNewUser ).then( (result_user) => {
				
				if( this.getterUser ){
					
					this.$root.$emit('login-user', true);
					this.$root.$emit("show-desktop-search", false);
					this.$root.$emit("show-desktop-search", true);
					
					document.getElementById(`reset-form-user`).click();
					this.newUser = {
						first_name	: "",
						last_name	: "",
						new_email	: "",
						new_password: ""
					};
					
					this.$router.push('/pages/inventory');
				}
			});
		},
	}
}
</script>