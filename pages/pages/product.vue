<template>
    <div class="section-b-space pt-0 page-content content-loading loading-page p-relative">
        <vc-loading v-if="getLoadingPage != null" :isLoading="getLoadingPage"></vc-loading>
        <breadcrumbs type="page" title="Products"></breadcrumbs>
        <div class="title-default my-4">
            <h2 class="title-inner-default">Products</h2>
        </div>
        <b-container class="p-4 mt-2 box-shadow">
            <div class="section-table">
                <b-row>
                    <b-col cols="12" class="custom-form mb-2">
                        <b-input-group size="sm">
                            <b-form-input id="filter-input" type="text" v-model="searchField" @change="searchTable" placeholder="Search"></b-form-input>
                            <b-input-group-append>
                                <b-button class="btn-solid px-3" :disabled="searchField == ''" @click="cleanSearchTable">
                                    <i class="fa-solid fa-trash"></i>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-col>
                    <b-col cols="12" lg="12" class="mb-2 d-flex align-items-end">
                        <b-row class="w-100 m-0">
                            <b-col cols="5" class="p-0">
                                <b-button class="btn-solid px-3 align-items-center d-flex" @click="openModal('registerProductModal')">
                                    <i class="fa-solid fa-plus mr-1"></i> New Product
                                </b-button>
                            </b-col>
                            <b-col cols="7" class="p-0">
                                <div class="page-size-table d-flex align-items-center w-100 justify-content-end">
                                    <span class=" d-flex justify-content-end w-50 text-muted text-small pr-2">{{ paginateDetails.fromPage }}-{{ paginateDetails.toPage }} of {{ paginateDetails.totalPages }}</span>
                                    <b-form-select v-model="paginateDetails.perPage" @change="changePageSize" class="w-50">
                                        <b-form-select-option  v-for="(item_size, index_size) in pageSizes" :key="index_size" :value="item_size" class="text-center">{{ item_size == "todo" ? "⚠️" : item_size }}</b-form-select-option>
                                    </b-form-select>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-table id="table_data" ref="table_data" :busy="isTableBusy" :items="getListItems" :fields="table_fields" :per-page="paginateDetails.perPage" :current-page="paginateDetails.currentPage" responsive show-empty small>
                    <template #table-busy>
                        <div class="d-flex align-items-center justify-content-center p-relative spinner-container text-center my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            <strong class="p-absolute">Loading...</strong>
                        </div>
                    </template>
                    <template #cell(sku)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(title)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(inventory_quantity)="data">
                        <label class="d-block text-center text-capitalize">{{ data.value }}</label>
                    </template>
                    <template #cell(expired_status)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(exipred_at)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(actions)="data">
                        <a @click="selectInventoryVariant(data.item.variant)" title="Show Inventory Items" class="d-inline-block">
                            <i class="fa-solid fa-square-check"></i> Show Inventory Items
                        </a>
                    </template>
                </b-table>
                <div class="custom-pagination row m-0 justify-content-center">
                    <b-pagination v-model="paginateDetails.currentPage" :total-rows="paginateDetails.totalPages" :per-page="paginateDetails.perPage" :align="'center'" aria-controls="table_orders" @change="onChangePage">
                        <template #first-text>
                            <span aria-hidden='true'>
                                <i class="fa-solid fa-angle-double-left"></i>
                            </span>
                        </template>
                        <template #prev-text>
                            <span aria-hidden='true'>
                                <i class="fa-solid fa-chevron-left"></i>
                            </span>
                        </template>
                        <template #next-text>
                            <span aria-hidden='true'>
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                        </template>
                        <template #last-text>
                            <span aria-hidden='true'>
                                <i class="fa-solid fa-angle-double-right"></i>
                            </span>
                        </template>
                    </b-pagination>
                </div>
            </div>
        </b-container>
        <b-modal id="registerProductModal" ref="registerProductModal" title="Register Product" modal-class="p-0 modal-right modal-product">
            <validation-observer tag="div" v-slot="{ handleSubmit, valid, reset, errors }" class="custom-form">
                <b-form class="custom-form" @submit.prevent="handleSubmit( onSubmitRegisterProduct )" @reset.prevent="reset">
                    <b-row>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Title" field_id="title" field_name="title" field_type="text" :field_value="newProduct.title" valid_rules="required"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Description" field_id="description" field_name="description" field_type="text" :field_value="newProduct.description" valid_rules="required"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Brand" field_id="brand" field_name="brand" field_type="text" :field_value="newProduct.brand" valid_rules="required"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Product Type" field_id="product_type" field_name="product_type" field_type="text" :field_value="newProduct.product_type" valid_rules="required"></vc-form-field>
                        </b-col>
                        <b-col cols="12" class="mb-4">
                            <b-form-group :label="'Add Options'" :label-for="'options'" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-group-section px-2 py-4 form-floating">
                                <b-row>
                                    <b-col cols="12" class="mb-4">
                                        <b-input-group class="custom-input-group custom-group d-flex justify-content-between">
                                            <vc-form-field label="Option Name" field_id="option_name" field_name="option_name" field_type="text" :field_value="newOption.option_name"></vc-form-field>
                                            <template #append>
                                                <button type="button" class="btn btn-solid shadow-sm align-items-center d-flex" :disabled="newOption.option_name == '' || newOption.values.length == 0"@click="addOption()">Add Option</button>
                                            </template>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="6" class="mb-4">
                                        <b-input-group class="custom-input-group custom-group d-flex justify-content-between">
                                            <vc-form-field label="Option Value" field_id="option_value" field_name="option_value" field_type="text" :field_value="newOption.option_value"></vc-form-field>
                                            <template #append>
                                                <button type="button" class="btn btn-solid shadow-sm align-items-center d-flex" :disabled="newOption.option_value == ''" @click="addOptionValue(newOption.option_value)">Add Value</button>
                                            </template>
                                        </b-input-group>
                                    </b-col>
                                    <b-col cols="6" class="mb-4">
                                        <b-form-group :label="'Options Values'" :label-for="'options'" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-group-section px-2 py-4 form-floating">
                                            <b-list-group flush>
                                                <b-list-group-item v-for="(value, index) in newOption.values" :key="index" class="d-flex justify-content-between align-items-center">
                                                    <span>{{ value }}</span>
                                                    <b-button size="sm" class="btn-solid shadow-sm align-items-center d-flex" variant="danger" @click="removeOptionValue(index)">Remove</b-button>
                                                </b-list-group-item>
                                            </b-list-group>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-group :label="'Product Options'" :label-for="'options'" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-group-section px-2 py-4 form-floating">
                                            <b-row>
                                                <b-col cols="6" v-for="(item_option, index_option) in newProduct.options" :key="index_option">
                                                    <b-form-group :label="item_option.name" :label-for="'options'" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-floating">
                                                        <b-list-group flush>
                                                            <b-list-group-item v-for="(value, index) in item_option.values" :key="index" class="d-flex justify-content-between align-items-center">
                                                                <span>{{ value }}</span>
                                                            </b-list-group-item>
                                                        </b-list-group>
                                                        <b-button size="sm" class="btn-solid shadow-sm align-items-center d-flex" variant="danger" @click="removeOption(index_option)">Remove</b-button>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" class="mb-4">
                            <b-form-group :label="'Add Variants'" :label-for="'variants'" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-group-section px-2 py-4 form-floating">
                                <b-row>
                                    <b-col cols="12" class="mb-4">
                                        <vc-form-field label="Title" field_id="variant_title" field_name="variant_title" field_type="text" :field_value="newVariant.variant_title"></vc-form-field>
                                    </b-col>
                                    <b-col cols="12" class="mb-4">
                                        <vc-form-field label="SKU" field_id="sku" field_name="sku" field_type="text" :field_value="newVariant.sku"></vc-form-field>
                                    </b-col>
                                    <b-col cols="12" md="6" class="mb-4">
                                        <vc-form-field label="Price" field_id="price" field_name="price" field_type="number" :field_value="newVariant.price" valid_rules="min_value:0"></vc-form-field>
                                    </b-col>
                                    <b-col cols="12" md="6" class="mb-4">
                                        <vc-form-field label="Grams" field_id="grams" field_name="grams" field_type="number" :field_value="newVariant.grams" valid_rules="min_value:0"></vc-form-field>
                                    </b-col>
                                    <b-col cols="12">
                                        <vc-form-field class="mb-4" label="Select Variant Options" field_id="option_variant" field_name="option_variant" field_type="v-select" :field_value="newVariant.option_variant" :select_data="newVariant.option_variants"></vc-form-field>
                                    </b-col>
                                    <b-col cols="12" class="mb-4">
                                        <b-button size="sm" class="btn-solid shadow-sm align-items-center d-flex" @click="addVariant()">Add Variant</b-button>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-group :label="'Product Variants'" :label-for="'options'" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-group-section px-2 py-4 form-floating">
                                            <b-list-group flush>
                                                <b-list-group-item v-for="(item_variant, index_variant) in newProduct.variants" :key="index_variant" class="d-flex justify-content-between align-items-center">
                                                    <span>{{ item_variant.sku }} - {{ item_variant.price }}</span>
                                                    <b-button size="sm" class="btn-solid shadow-sm align-items-center d-flex" variant="danger" @click="removeVariant(index_variant)">Remove</b-button>
                                                </b-list-group-item>
                                            </b-list-group>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div class="d-flex justify-content-center align-items-center">
                        <button type="submit" class="btn btn-solid shadow-sm" :disabled="valid == false">Register</button>
                    </div>
                </b-form>
            </validation-observer>
            <template slot="modal-footer">
                <button class="btn btn-solid-second shadow-sm" @click="hideModal('registerProductModal')">close</button>
            </template>
        </b-modal>
        <b-modal id="inventoryVariantModal" ref="inventoryVariantModal" :title="`Inventory Items: ${ selectedVariant?.sku }`" modal-class="p-0 modal-right modal-product">
            <validation-observer tag="div" v-slot="{ handleSubmit, valid, reset, errors }" class="custom-form">
                <div class="custom-form">
                    <b-row v-for="(item_inventory, index_inventory) in ( selectedVariant?.inventory_items || [] )" :key="index_inventory" class="mb-4">
                        <b-col cols="4">
                            <vc-form-field class="mb-4" label="Location Name" field_id="location_name" field_name="location_name" field_type="text" :field_value="item_inventory.location.name"></vc-form-field>
                        </b-col>
                        <b-col cols="4">
                            <vc-form-field class="mb-4" label="Inventory Quantity" field_id="quantity" field_name="quantity" field_type="text" :field_value="item_inventory.quantity"></vc-form-field>
                        </b-col>
                        <b-col cols="4">
                            <vc-form-field class="mb-4" label="Expired at" field_id="expired_at" field_name="expired_at" field_type="text" :field_value="item_inventory.expired_at != null ? frontDate(item_inventory.expired_at) : ''"></vc-form-field>
                        </b-col>
                    </b-row>
                </div>
            </validation-observer>
            <template slot="modal-footer">
                <button class="btn btn-solid-second shadow-sm" @click="hideModal('inventoryVariantModal')">close</button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
    components: {
        DateRangePicker,
        vcLoading   : () => import("../../components/pages/loading.vue"),
        breadcrumbs : () => import("../../components/pages/breadcrumbs.vue"),
        vcFormField	: () => import('../../components/pages/form-field.vue')
    },
    data() {
        return {
            is_loading_page             : true,
            isLoading           : true,
            
            listItems           : [],
            paginateDetails	    : {
                perPage     : 20,
                currentPage : 1,
                lastPage    : 0,
                fromPage    : 0,
                toPage      : 0,
                totalPages  : 0
            },
            pageSizes	        : [10, 20, 50, 100],
            isTableBusy	        : true,
            
            newInventoryVariant         : {
                variant         : null,
                location        : null,
                quantity        : 1,
                transaction_type: 'in',
                expired_at: moment().add(1, 'day').toISOString()
            },
            newProduct     : {
                title           : '',
                description     : '',
                brand           : '',
                product_type    : '',
                options         : [],
                variants        : []
            },
            newOption      : {
                option_name     : '',
                option_value    : '',
                values          : []
            },
            newVariant     : {
                variant_title   : '',
                sku             : '',
                price           : 0,
                grams           : 0,
                option_variant  : null,
                option_variants : []
            },
            min_date : moment().toISOString(),
            
            table_fields: [
            { key: 'sku', label: 'SKU', class: "w-10 d-md-table-cell d-none" },
            { key: 'title', label: 'Title', class: "w-15 d-md-table-cell d-none" },
            { key: 'inventory_quantity', label: 'Inventory Quantity', class: "w-15" },
            { key: 'expired_status', label: 'Exipred Status', class: "w-10 d-none d-sm-table-cell" },
            { key: 'expired_at', label: 'Exipred At', class: "w-10", formatter: (value, key, item) => { 
                return value == null ? '' : moment(value.toString().split(".")[0]).calendar(); 
            } },
            { key: 'actions', label: 'Actions', class: "w-15 hide-title" }
            ],
            selectedVariant: null,
            
            searchField			: "",
            min_date			: moment( new Date() ).startOf("month").startOf("day").format("MMMM DD, YYYY"),
            max_date			: moment( new Date() ).endOf("day").format("MMMM DD, YYYY"),
            range_dates			: {
                startDate: moment( new Date() ).startOf("month").startOf("day").format('MMMM DD, YYYY'),
                endDate: moment( new Date() ).endOf("day").format('MMMM DD, YYYY'),
            },
            quick_ranges: {
                'Today'     : [
                new Date( moment( new Date() ).startOf("day") ), 
                new Date( moment( new Date() ).endOf("day") )],
                'Yesterday' : [
                new Date( moment( new Date() ).subtract(1, 'day').startOf("day") ), 
                new Date( moment( new Date() ).subtract(1, 'day').endOf("day") )],
                'This month': [
                new Date( moment( new Date() ).startOf("month").startOf("day") ), 
                new Date( moment( new Date() ).endOf("day") )],
                'Last month': [
                new Date( moment( new Date() ).subtract(1, 'month').startOf("month").startOf("day") ), 
                new Date( moment( new Date() ).subtract(1, 'month').endOf("month").endOf("day") )],
                'This year' : [
                new Date( moment( new Date() ).startOf("year").startOf("day") ), 
                new Date( moment( new Date() ).endOf("day") )],
                'Last year' : [
                new Date( moment( new Date() ).subtract(1, 'year').startOf("year").startOf("day") ), 
                new Date( moment( new Date() ).subtract(1, 'year').endOf("year").endOf("day") )],
            }
        };
    },
    async mounted(){
        
        this.$root.$on('update-field-value'	, this.updateFieldValue);
        this.updateLoginUser( { token_login: this.$cookies.get('token-app'), data_user: this.$cookies.get('user-app'), current_route: this.$route.path } );
        if( this.getterLogin ){
            
            this.updateTableData();
            this.is_loading_page = null;
        }
        else{
            
            this.$router.push('/');
        }
    },
    computed: {
        ...mapGetters({
            getterLogin             : 'getterLogin',
            getterUser              : 'getterUser',
            getterVariants          : 'getterVariants',
        }),
        getListItems(){
            return this.listItems;
        },
        getNewProduct(){
            return this.newProduct;
        },
        getNewOption(){
            return this.newOption;
        },
        getNewVariant(){
            return this.newVariant;
        },
        getLoadingPage(){
            return this.is_loading_page;
        },
    },
    methods: {
        ...mapActions({
            addNotification: 'addNotification',
            updateLoginUser: 'updateLoginUser',
            getVariantData : 'getVariantData',
            getLocationData: 'getLocationData',
            getInventoryVariantData : 'getInventoryVariantData',
            registerInventoryVariant: 'registerInventoryVariant',
            registerInventoryTransaction : 'registerInventoryTransaction',
            registerProduct : 'registerProduct'
        }),
        dbDate(item_date) {
            return moment( new Date(item_date) ).format("YYYY-MM-DD");
        },
        frontDate(item_date){
            
            return moment(item_date.toString().split(".")[0]).calendar();
        },
        async updateFieldValue( data ){
            
            this.newOption[data.field] = data.value;
            this.newVariant[data.field] = data.value;
            this.newProduct[data.field] = data.value;
        },
        async addOptionValue( value ){
            
            if( this.newOption.values.includes( value ) ){
                return;
            }
            this.newOption.values.push( value );
            this.newOption.option_value = '';
        },
        async removeOptionValue( index ){
            
            this.newOption.values.splice( index, 1 );
        },
        async addOption(){
            
            if( this.newProduct.options.length == 0 ){
                this.newProduct.options.push({ name: this.newOption.option_name, values: this.newOption.values });
                this.newOption.option_name = '';
                this.newOption.option_value = '';
                this.newOption.values = [];
            }
            else{
                let index_option = this.newProduct.options.findIndex( (item_option) => item_option.name == this.newOption.option_name );
                if( index_option == -1 ){
                    
                    this.newProduct.options.push({ name: this.newOption.option_name, values: this.newOption.values });
                    this.newOption.option_name = '';
                    this.newOption.option_value = '';
                    this.newOption.values = [];
                }
                else{
                    
                    this.addNotification({ type: 'danger', title: 'Error: Product Option', message: 'Option name already exists' });
                }
            }
            this.newVariant.option_variants = [];
            this.updateOptionVariants();	
        },
        updateOptionVariants(){
            
            this.newVariant.option_variants = this.newProduct.options.reduce( (previous_item, current_item, current_index) => {
                
                if( current_index == 0 ){
                    previous_item = current_item.values.map( (item, index) => {
                        return {
                            label: `${ current_item.name }: ${ item }`, 
                            id: current_index + index,
                            value: [
                            {
                                name: current_item.name,
                                value: item
                            }
                            ]
                        }
                    });
                }
                else{
                    let new_values = [];
                    for (const item_value_a of current_item.values) {
                        
                        for (const item_value_b of previous_item) {
                            
                            new_values.push({
                                label: `${ item_value_b.label } - ${ current_item.name }: ${ item_value_a }`, 
                                id: item_value_b.id + current_index,
                                value: [
                                ...item_value_b.value,
                                {
                                    name: current_item.name,
                                    value: item_value_a
                                }
                                ]
                            });
                        }
                    }
                    previous_item = new_values;
                }
                if( current_index + 1 === this.newProduct.options.length ){
                    previous_item = previous_item.reduce( (previous_option, current_option) => {
                        
                        if( this.newProduct.variants.length == 0 || ( this.newProduct.variants.length > 0 && this.newProduct.variants.find( (item) => JSON.stringify(item.options) === JSON.stringify(current_option.value) ) === undefined ) ){
                            
                            previous_option.push( current_option );
                            console.log( 1 );
                        }
                        return previous_option;
                    }, []);
                }
                return previous_item;
            }, []);
        },
        async removeOption( index ){
            
            this.newProduct.options.splice( index, 1 );
        },
        async addVariant(){
            
            if( this.newProduct.variants.length == 0 ){
                
                this.newProduct.variants.push({ 
                    variant_title   : this.newVariant.variant_title,
                    sku             : this.newVariant.sku,
                    price           : this.newVariant.price,
                    grams           : this.newVariant.grams,
                    options         : this.newVariant.option_variants.find( (item) => item.id == this.newVariant.option_variant ).value
                });
                console.log( 1, this.newProduct.variants );
                this.newVariant.variant_title = '';
                this.newVariant.sku = '';
                this.newVariant.price = 0;
                this.newVariant.grams = 0;
                this.newVariant.option_variant = null;
            }
            else{
                let index_variant = this.newProduct.variants.findIndex( (item_variant) => item_variant.sku == this.newVariant.sku );
                if( index_variant == -1 ){
                    
                    this.newProduct.variants.push({ 
                        variant_title   : this.newVariant.variant_title,
                        sku             : this.newVariant.sku,
                        price           : this.newVariant.price,
                        grams           : this.newVariant.grams,
                        options         : this.newVariant.option_variants.find( (item) => item.id == this.newVariant.option_variant ).value
                    });
                    this.newVariant.variant_title = '';
                    this.newVariant.sku = '';
                    this.newVariant.price = 0;
                    this.newVariant.grams = 0;
                    this.newVariant.options = null;
                }
                else{
                    
                    this.addNotification({ type: 'danger', title: 'Error: Product Variant', message: 'SKU already exists' });
                }
            }
            this.newVariant.option_variants = [];
            this.updateOptionVariants();
        },
        async removeVariant( index ){
            
            this.newProduct.variants.splice( index, 1 );
            this.updateOptionVariants();
        },
        async onSubmitRegisterProduct(){
            
            let format_product = {
                title       : this.getNewProduct.title,
                description : this.getNewProduct.description,
                brand       : this.getNewProduct.brand,
                product_type: this.getNewProduct.product_type,
                options     : this.getNewProduct.options,
                variants    : this.getNewProduct.variants.map( (item) => {
                    return {
                        title       : item.variant_title,
                        brand       : this.newProduct.brand,
                        product_type: this.newProduct.product_type,
                        sku         : item.sku,
                        price       : item.price,
                        grams       : item.grams,
                        weight      : ( item.grams / 100 ),
                        options     : item.options
                    }
                })
            }
            await this.registerProduct( format_product ).then( (result) => {
                
                // this.hideModal('registerProductModal');
                // this.updateTableData();
            });
        },
        openModal(ref) {
            this.$refs[ref].show();
        },
        hideModal(ref) {
            this.$refs[ref].hide();
        },
        selectInventoryVariant( inventory_item ){
            
            this.selectedVariant = inventory_item;
            this.openModal('inventoryVariantModal');
        },
        async updateTableData(){
            this.isTableBusy = true;
            this.paginateDetails.currentPage = 1;
            this.onChangePage(1);
            this.updatePaginateTable([]);
            
            // min_date: this.dbDate( this.range_dates.startDate ), max_date: this.dbDate( this.range_dates.endDate )
            let find_query = { search: this.searchField };
            await this.getVariantData(find_query).then( (result_orders) => {
                
                this.listItems = this.getterVariants.map( (item_product) => {
                    
                    return item_product.variants.map( (item_variant) => {
                        return {
                            sku             : item_variant.sku,
                            title           : item_product.title,
                            inventory_quantity: item_variant.inventory_quantity,
                            expired_status  : item_variant.expired_status,
                            expired_at      : item_variant.expired_at,
                            variant         : item_variant
                        }
                    });
                }).flat();
                console.log( this.listItems );
                this.resultListItems();
            });
        },
        resultListItems(){
            
            this.updatePaginateTable(this.getListItems);
            this.$refs["table_data"]?.refresh();
            this.isTableBusy = false;
        },
        updatePageinfo( page ){
            this.paginateDetails.toPage = ( this.paginateDetails.perPage * page ) > this.paginateDetails.totalPages ? this.paginateDetails.totalPages : ( this.paginateDetails.perPage * page );
            this.paginateDetails.fromPage = ( this.paginateDetails.perPage * ( page - 1 ) ) + 1;
        },
        updatePaginateTable(rows){
            this.paginateDetails.currentPage = 1;
            this.paginateDetails.totalPages = rows.length;
            this.updatePageinfo( this.paginateDetails.currentPage );
        },
        onChangePage(page) {
            this.updatePageinfo( page );
        },
        changePageSize(perPage) {
            this.paginateDetails.perPage = perPage;
            this.updatePageinfo( this.paginateDetails.currentPage );
        },
        async searchTable(search_value) {
            this.searchField = search_value;
            await this.updateTableData();
        },
        async cleanSearchTable(){
            this.searchField = "";
            await this.updateTableData();
        },
        async updateRangeDate (values) {
            this.range_dates.startDate = moment( new Date(values.startDate) ).format('MMMM DD, YYYY');
            this.range_dates.endDate = moment( new Date(values.endDate) ).format('MMMM DD, YYYY');
            await this.updateTableData();
        },
    }
}
</script>