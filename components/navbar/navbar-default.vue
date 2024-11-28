<template>
	<div v-if="getterLogin" class="main-navbar">
		<div id="main-nav">
			<div class="toggle-nav" @click="openMobileNav=true">
				<i class="fa-solid fa-bars sidebar-bar"></i>
			</div>
			<ul v-if="getNavigation?.length > 0" class="nav-menu" :class="{ 'open-nav': openMobileNav }">
				<li v-for="(item_menu, index_menu) in getNavigation" :key="`menu-${ index_menu }`" :class="item_menu.mega_menu ? 'mega-menu' : 'dropdown'" @click="setActive(item_menu.name)">
					<navbar-item type_menu="desktop" :item_menu="item_menu" :index_menu="index_menu"></navbar-item>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import json_navigation       from '../../assets/documents/navigation.json';
export default {
	props: ['homeNavigation'],
	components:{
		navbarItem: () => import('../navbar/navbar-item.vue')
	},
	data() {
		return {
			openMobileNav: false,
			activeItem: '',
			activeChildItem: '',
			activeMegaChild: '',
			navigation: json_navigation
		}
	},
    computed: {
		...mapGetters({
			getterLogin: 'getterLogin'
		}),
        getNavigation(){
            
            return this.navigation;
        }
    },
    methods: {
        setActive(menuItem) {
            
            this.activeItem = this.activeItem === menuItem ? '' : menuItem;
        }
	}
}
</script>