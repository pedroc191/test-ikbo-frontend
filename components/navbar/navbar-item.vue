<template>
    <div class="content-nav-item">
        <div v-if="item_menu.show && item_menu.childrens.length > 0" :class="`nav-link${ isActive(item_menu.name) ? ' active' : '' } ${ item_menu.custom_class }`">
            {{ item_menu.name }}
            <span class="sub-arrow">
                <i class="fa-solid fa-angle-down"></i>
            </span>
        </div>
        <nuxt-link v-else-if="item_menu.show" :to="{ path: item_menu.url }" :custom="true" v-slot="{href, navigate}" :class="`nav-link${ isActive(item_menu.name) ? ' active' : '' } ${ item_menu.custom_class }`">
            <a :href="href" @click="navItemOptionOpen($event, navigate, item_menu.name, type_menu, 'main-item')">
                {{ item_menu.name }}
            </a>
        </nuxt-link>
        <ul v-if="item_menu.show && item_menu.childrens.length > 0 && !item_menu.mega_menu" class="nav-submenu" :class="{ 'open-submenu': isActive(item_menu.name) }">
            <li v-for="(item_sub_menu, index_sub_menu) in item_menu.childrens" :key="`sub-menu-${ index_sub_menu }`">
                <div v-if="item_sub_menu.show && item_sub_menu.childrens" @click="setActiveChild(item_sub_menu.name)">
                    {{ item_sub_menu.name }}
                    <span class="sub-arrow" v-if="item_sub_menu.childrens">
                        <i class="fa-solid fa-angle-down"></i>
                    </span>
                </div>
                <nuxt-link v-else-if="item_sub_menu.show" :to="{ path: item_sub_menu.url }" :custom="true" v-slot="{href, navigate}" :class="item_sub_menu.custom_class">
                    <a :href="href" @click="navItemOptionOpen($event, navigate, item_sub_menu.name, type_menu, 'child-item')">
                        {{ item_sub_menu.name }}
                    </a>
                </nuxt-link>
                <ul v-if="item_sub_menu.childrens && item_sub_menu.show" class="nav-sub-childmenu" :class="{ 'open-sub-child': isActiveChild(item_sub_menu.name) }">
                    <li v-for="(item_sub_item, index_sub_item) in item_sub_menu.childrens" :key="`sub-item-menu${ index_sub_item }`">
                        <nuxt-link v-if="item_sub_item.show" :to="{ path: item_sub_item.url }" :custom="true" v-slot="{href, navigate}" :class="item_sub_menu.custom_class">
                            <a :href="href" @click="navItemOptionOpen($event, navigate, item_sub_item.name, type_menu, 'sub-child-item')">
                                {{ item_sub_item.name }}
                            </a>
                        </nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
        <div v-if="item_menu.show && item_menu.childrens.length > 0 && item_menu.mega_menu" class="mega-menu-container" :class="{ 'open-submenu': isActive(activeChildItem) }">
            <b-container>
                <b-row>
                    <b-col cols="12" sm="6" class="mega-box" v-for="(item_sub_menu, index_sub_menu) in item_menu.childrens" :key="index_sub_menu">
                        <div v-if="item_sub_menu.show" class="link-section">
                            <div class="menu-title">
                                <nuxt-link v-if="item_sub_menu.url" :to="{ path: item_sub_menu.url }" :custom="true" v-slot="{href, navigate}" :class="item_sub_menu.custom_class">
                                    <a :href="href" @click="navItemOptionOpen($event, navigate, item_sub_menu.name, type_menu, 'child-item')">
                                        <h5>{{ item_sub_menu.name }}</h5>
                                    </a>
                                </nuxt-link>
                                <h5 v-else>{{item_sub_menu.name}}</h5>
                            </div>
                            <div class="menu-content" :class="{ 'open-sub-mega-menu': isActiveSubChild(activeChildItem) }">
                                <ul>
                                    <li v-for="(item_sub_child, index_sub_child) in item_sub_menu.childrens" :key="index_sub_child">
                                        <nuxt-link v-if="item_sub_child.show" :to="{ path: item_sub_child.url }" :custom="true" v-slot="{href, navigate}" :class="`${ item_sub_child.custom_class } ${ isActiveSubChild(item_sub_child.name) ? 'active' : '' }`">
                                            <a :href="href" @click="navItemOptionOpen($event, navigate, item_sub_child.name, type_menu, 'sub-child-item')">
                                                {{ item_sub_child.name }}
                                            </a>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    props: ['type_menu', 'item_menu', 'index_menu'],
    data() {
        return {
            activeItem          : '',
            activeChildItem     : '',
            activeSubChildItem  : ''
        }
    },
    methods: {
        isActive(menuItem) {
            
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            
            this.activeItem = this.activeItem === menuItem ? '' : menuItem;
        },
        isActiveChild(menuChildItem) {
            
            return this.activeChildItem === menuChildItem;
        },
        setActiveChild(menuChildItem) {
            
            this.activeChildItem = this.activeChildItem === menuChildItem ? '' : menuChildItem;
        },
        isActiveSubChild(subChildItem) {
            
            return this.activeSubChildItem === subChildItem;
        },
        setActiveSubChild(subChildItem) {
            
            this.activeSubChildItem = this.activeSubChildItem === subChildItem ? '' : subChildItem;
        },
		navItemOptionOpen(event, navigate, menuItem, type_menu, type_item){
			if( menuItem ){
                if( type_item == 'child-item' ){
                    this.setActiveChild(menuItem);
                }
                else if( type_item == 'sub-child-item' ){
                    this.setActiveSubChild(menuItem);
                }
			}
            if( type_menu == 'mobile'){
                this.$root.$emit('close-sidebar');
            }
			navigate(event);
		}
    }
}
</script>