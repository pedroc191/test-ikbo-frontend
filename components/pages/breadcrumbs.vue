<template>
	<div id="breadcrumb-section" class="breadcrumb-section">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<nav aria-label="breadcrumb" class="theme-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<nuxt-link :to="{ path: '/' }">Home</nuxt-link>
							</li>
							<li class="breadcrumb-item breadcrumb-separator"> / </li>
							<li v-if="( ['collection', 'checkout'].includes(type) && subtitle ) || type == 'pages'" class="breadcrumb-item chunk-lines chunk-lines-1">{{ type == 'pages' ? 'Pages' : subtitle }}</li>
							<li v-else-if="( ['product'].includes(type) && !subItemData )" class="breadcrumb-item chunk-lines chunk-lines-1">Products</li>
							<li v-else-if="['product', 'blog'].includes(type) && subItemData" class="breadcrumb-item">
								<nuxt-link class="chunk-lines chunk-lines-1" :to="{ path: `/${ type == 'product' ? 'collections' : 'blog' }/${ subItemData.handle }` }">{{ subItemData.title }}</nuxt-link>
							</li>
							<li v-else-if="['account', 'dashboard'].includes(type)" class="breadcrumb-item chunk-lines chunk-lines-1">
								<nuxt-link :to="{ path: '/account/dashboard' }">{{ type == 'dashboard' ? 'Dashboard' : 'Account' }}</nuxt-link>
							</li>
							<li v-if="( ['product', 'blog'].includes(type) && subItemData ) || ( ['product', 'account', 'collection', 'checkout', 'dashboard', 'pages'].includes(type) && !subItemData )" class="breadcrumb-item breadcrumb-separator"> / </li>
							<li v-if="title" class="breadcrumb-item active chunk-lines chunk-lines-1">{{ title }}</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		'type'			: { type: String, default: 'pages' },
		'title'			: { type: String, default: null }, 
		'subtitle'		: { type: String, default: null },
		'subItemData'	: { type: Object, default: null }
	}, 
	mounted(){
	}
}
</script>
