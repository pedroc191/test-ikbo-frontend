<template>
	<div class="section-b-space pt-0 page-content content-loading loading-page p-relative">
		<vc-loading v-if="isLoading != null" :isLoading="isLoading"></vc-loading>
		<breadcrumbs title="Forgot Password"></breadcrumbs>
		<div class="title-default my-4">
			<h2 class="title-inner-default">Forgot Password</h2>
		</div>
		<b-container>
			<b-row>
				<b-col v-if="!availableChangePassword"  cols="12" md="6" class="offset-md-3">
					<div class="box-content mb-4">
						<h6>You must enter your email and to validate your account and change the password</h6>
					</div>
					<validation-observer v-slot="{ invalid, handleSubmit }" tag="div" class="custom-form">
						<b-form id="valid-customer-email" @submit.prevent="handleSubmit( validCustomerEmail )" autocomplete="off">
							<validation-provider rules="required|email" v-slot="{ errors }" name="email">
								<b-form-group label="Email" label-for="email" label-align-sm="top" label-size="sm" label-class="font-color-dark mb-2 font-weight-normal" class="mb-0">
									<b-input-group>
										<b-form-input type="email" v-model="email" placeholder="Email" name="email"/>
									</b-input-group>
									<span v-if="email" class="field-error-msg">{{ errors[0] }}</span>
								</b-form-group>
							</validation-provider>
							<div class="d-flex justify-content-end">
								<b-button type="submit" class="btn btn-solid shadow-sm mt-4" :disabled="invalid">Valid Email</b-button>
							</div>
						</b-form>
					</validation-observer>
				</b-col>
				<b-col v-else cols="12" md="6" class="offset-md-3">
					<div class="box-content mb-4">
						<h6>Change your password for the selected email: <strong>{{ email }}</strong></h6>
					</div>
					<form-password :email="getUserEmail" @updateLoading="updateLoading"></form-password>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
	components: {
		breadcrumbs: () => import('../../components/pages/breadcrumbs.vue'),
		vcLoading: () => import('../../components/pages/loading.vue'),
		formPassword: () => import("../../components/pages/form-password.vue")
	},
	data() {
		return {
			isLoading: null,
			email: null,
			availableChangePassword: false,
		}
	},
	computed:{
		...mapGetters({
			getterValidCustomer: "getterValidCustomer",
			getterChangePassword: "getterChangePassword"
		}),
		getUserEmail(){
			return this.email;
		}
	},
	mounted(){
		this.$root.$on('change-loading', this.updateLoading);
	},
	methods: {
		...mapActions({
			validCustomer: "validCustomer"
		}),
		updateLoading(dataLoading){
			
			this.isLoading = dataLoading;
		},
		async validCustomerEmail(){
			this.isLoading = true;
			await this.validCustomer({ email: this.email }).then( (result_customer) => {
				
				this.resultValidCustomerEmail();
			}).catch( (error_customer) => {
				
				this.resultValidCustomerEmail();
			});
		},
		resultValidCustomerEmail(){
			
			this.isLoading = null;
			this.availableChangePassword = this.getterValidCustomer.success;
		}
	}
}
</script>
