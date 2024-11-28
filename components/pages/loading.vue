<template>
	<div v-if="show_loading != null" class="d-flex justify-content-center" id="vue-loading" :class="[{ 'shadow-loading': ( show_loading != null && !show_loading ) }]">
		<div class="container-loading">
			<div class="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="loading-text d-block p-relative">
				<span :class="`p-absolute align-items-center ${ change_message ? 'show-message' : 'hide-message' }`">This process can take a few minutes</span>
				<span :class="`p-absolute align-items-center ${ change_message ? 'hide-message' : 'show-message' }`">We are processing your request</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props:["isLoading"],
	name: 'vc-loading',
	data() {
		return {
			show_loading: true,
			change_message: false,
		}
	},
	mounted(){
		
		setInterval(() => {
			this.change_message = !this.change_message;
		}, 6000);
	},
	watch: {
		isLoading(){
			this.show_loading = true;
			if( !this.isLoading ){
				setTimeout(() => {
					this.show_loading = false;
					setTimeout(() => {
						this.show_loading = null;
					}, 500);
				}, 300);
			}
			return this.show_loading;
		}
	}
}
</script>