<template>
    <div class="section-b-space pt-0 page-content content-loading loading-page p-relative">
        <vc-loading v-if="getLoadingPage != null" :isLoading="getLoadingPage"></vc-loading>
        <breadcrumbs type="page" title="Inventory Items"></breadcrumbs>
        <div class="title-default my-4">
            <h2 class="title-inner-default">Inventory Items</h2>
        </div>
        <b-container class="p-4 mt-2 box-shadow">
            <div class="section-table">
                <b-row>
                    <b-col cols="12" lg="12" class="mb-2 d-flex align-items-end">
                        <b-row class="w-100 m-0">
                            <b-col cols="4" class="p-0">
                                <b-button class="btn-solid px-3 align-items-center d-flex" @click="openModal('inventoryVariantModal')">
                                    <i class="fa-solid fa-plus mr-1"></i> New Inventory Item
                                </b-button>
                            </b-col>
                            <b-col cols="4" class="p-0">
                                <b-button class="btn-solid px-3 align-items-center d-flex" @click="openModal('inventoryTransactionModal')">
                                    <i class="fa-solid fa-plus mr-1"></i> New Inventory Transaction
                                </b-button>
                            </b-col>
                            <b-col cols="4" class="p-0">
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
                    <template #cell(_id)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(location_name)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(sku)="data">
                        <label class="d-block text-center text-capitalize">{{ data.value }}</label>
                    </template>
                    <template #cell(quantity)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(expired_status)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(exipred_at)="data">
                        <label class="d-block text-center">{{ data.value }}</label>
                    </template>
                    <template #cell(actions)="data">
                        <a v-if="data.item.expired_status != 'expired'" @click="selectInventoryVariant(data.item)" title="Add Transaction" class="d-inline-block">
                            <i class="fa-solid fa-square-check"></i> Add Transaction
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
        <b-modal id="inventoryVariantModal" ref="inventoryVariantModal" title="Register Inventory Variant" modal-class="p-0 modal-right modal-inventory">
            <validation-observer tag="div" v-slot="{ handleSubmit, valid, reset, errors }" class="custom-form">
                <b-form class="custom-form" @submit.prevent="handleSubmit( onSubmitRegisterInventoryVariant )" @reset.prevent="reset">
                    <b-row>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Select Product Variant" field_id="variant" field_name="variant" field_type="v-select" :field_value="newInventoryVariant.variant" valid_rules="required" :select_data="getVariants"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Select Location" field_id="location" field_name="location" field_type="v-select" :field_value="newInventoryVariant.location" valid_rules="required" :select_data="getLocations"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Quantity" field_id="quantity" field_name="quantity" field_type="number" :field_value="newInventoryVariant.quantity" valid_rules="required|min_value:1"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Expired Date" field_id="expired_at" field_name="expired-at" field_type="date" :field_min_value="min_date" :field_value="newInventoryVariant.expired_at" valid_rules="required"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Transaction Type" field_id="transaction_type" field_name="transaction-type" field_type="radio" :field_value="newInventoryVariant.transaction_type" :select_data="getNewTransactionTypes"></vc-form-field>
                        </b-col>
                    </b-row>
                    <div class="d-flex justify-content-center align-items-center">
                        <button type="submit" class="btn btn-solid shadow-sm" :disabled="valid == false">Register</button>
                    </div>
                </b-form>
            </validation-observer>
            <template slot="modal-footer">
                <button class="btn btn-solid-second shadow-sm" @click="hideModal('inventoryVariantModal')">close</button>
            </template>
        </b-modal>
        <b-modal id="inventoryTransactionModal" ref="inventoryTransactionModal" title="Register Inventory Transaction" modal-class="p-0 modal-right modal-inventory">
            <validation-observer tag="div" v-slot="{ handleSubmit, valid, reset, errors }" class="custom-form">
                <b-form class="custom-form" @submit.prevent="handleSubmit( onSubmitRegisterInventoryTransaction )" @reset.prevent="reset">
                    <b-row>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Select Inventory Variant" field_id="inventory_item" field_name="inventory_item" field_type="v-select" :field_value="newInventoryTransaction.inventory_item" valid_rules="required" :select_data="getInventoryVariants"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Product Variant" field_id="variant_sku" field_name="variant_sku" field_type="text" :field_value="newInventoryTransaction.variant_sku"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Location" field_id="location_name" field_name="location_name" field_type="text" :field_value="newInventoryTransaction.location_name"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Quantity" field_id="quantity" field_name="quantity" field_type="number" :field_value="newInventoryTransaction.quantity" :valid_rules="`required|${ newInventoryTransaction.transaction_type == 'in' ? 'min_value:1' : `max_value:${ newInventoryTransaction.min_quantity }` }`"></vc-form-field>
                        </b-col>
                        <b-col cols="12">
                            <vc-form-field class="mb-4" label="Transaction Type" field_id="transaction_type" field_name="transaction-type" field_type="radio" :field_value="newInventoryTransaction.transaction_type" :select_data="getAllTransactionTypes"></vc-form-field>
                        </b-col>
                    </b-row>
                    <div class="d-flex justify-content-center align-items-center">
                        <button type="submit" class="btn btn-solid shadow-sm" :disabled="valid == false">Register</button>
                    </div>
                </b-form>
            </validation-observer>
            <template slot="modal-footer">
                <button class="btn btn-solid-second shadow-sm" @click="hideModal('inventoryTransactionModal')">close</button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
export default {
    components: {
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
            
            variants                    : [],
            locations                   : [],
            inventory_items             : [],
            newInventoryVariant         : {
                variant         : null,
                location        : null,
                quantity        : 1,
                transaction_type: 'in',
                expired_at: moment().add(1, 'day').toISOString()
            },
            newInventoryTransaction     : {
                inventory_item      : null,
                variant_sku         : null,
                location            : null,
                quantity            : 1,
                min_quantity        : 1,
                transaction_type    : 'in'
            },
            new_transaction_types: [
            { label: 'In', value: 'in', show: true }
            ],
            all_transaction_types: [
            { label: 'In', value: 'in', show: true },
            { label: 'Out', value: 'out', show: true }
            ],
            min_date : moment().toISOString(),
            
            table_fields: [
            { key: '_id', label: 'Id', class: "w-10 d-md-table-cell d-none" },
            { key: 'location_name', label: 'Location', class: "w-15 d-md-table-cell d-none" },
            { key: 'sku', label: 'SKU', class: "w-15" },
            { key: 'quantity', label: 'Quantity', class: "w-10" },
            { key: 'exipred_status', label: 'Exipred Status', class: "w-10 d-none d-sm-table-cell" },
            { key: 'expired_at', label: 'Exipred At', class: "w-10", formatter: (value, key, item) => { 
                return moment(value.toString().split(".")[0]).calendar(); 
            } },
            { key: 'actions', label: 'Actions', class: "w-15 hide-title" }
            ],
            valid_form                  : false
        };
    },
    async mounted(){
        
        this.$root.$on('update-field-value'	, this.updateFieldValue);
        this.updateLoginUser( { token_login: this.$cookies.get('token-app'), data_user: this.$cookies.get('user-app'), current_route: this.$route.path } );
        if( this.getterLogin ){
            await this.updateTableData();
            
            await this.getVariantData().then( (result_variants) => {
                
                this.variants = this.getterVariants.map( (item) => {
                    
                    return item.variants.map( (variant) => {
                        
                        return { label: variant.title, id: variant._id.toString() };
                    });
                }).flat();
            });
            await this.getLocationData().then( (result_locations) => {
                
                this.locations = this.getterLocations.map( (item) => {
                    
                    return { label: item.name, id: item._id.toString() };
                });
            });
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
            getterLocations         : 'getterLocations',
            getterInventoryVariants : 'getterInventoryVariants'
        }),
        getListItems(){
            return this.listItems;
        },
        getVariants(){
            return this.variants;
        },
        getLocations(){
            return this.locations;
        },
        getInventoryVariants(){
            return this.inventory_items;
        },
        getNewTransactionTypes(){
            return this.new_transaction_types;
        },
        getAllTransactionTypes(){
            return this.all_transaction_types;
        },
        getNewInventoryVariant(){
            return this.newInventoryVariant;
        },
        getNewInventoryTransaction(){
            return this.newInventoryTransaction;
        },
        getLoadingPage(){
            return this.is_loading_page;
        },
    },
    methods: {
        ...mapActions({
            updateLoginUser: 'updateLoginUser',
            getVariantData : 'getVariantData',
            getLocationData: 'getLocationData',
            getInventoryVariantData : 'getInventoryVariantData',
            registerInventoryVariant: 'registerInventoryVariant',
            registerInventoryTransaction : 'registerInventoryTransaction'
        }),
        async updateFieldValue( data ){
            console.log( data.field, data.value, this.newInventoryVariant, !!this.newInventoryVariant[data.field], this.newInventoryVariant[data.field] );
            
            if( data.field == 'inventory_item' ){
                this.newInventoryTransaction.variant_sku    = this.getInventoryVariants.find( (item) => item._id === data.value ).variant.sku;
                this.newInventoryTransaction.min_quantity   = this.getInventoryVariants.find( (item) => item._id === data.value ).quantity;
                this.newInventoryTransaction.location_name  = this.getInventoryVariants.find( (item) => item._id === data.value ).location.name;
            }
            this.newInventoryVariant[data.field] = data.value;
            this.newInventoryTransaction[data.field] = data.value;
        },
        async onSubmitRegisterInventoryVariant(){
            this.getNewInventoryVariant.expired_at = moment(this.getNewInventoryVariant.expired_at).toISOString();
            await this.registerInventoryVariant( this.getNewInventoryVariant ).then( (result) => {
                
                this.hideModal('inventoryVariantModal');
                this.updateTableData();
            });
        },
        async onSubmitRegisterInventoryTransaction(){
            
            await this.registerInventoryTransaction( this.getNewInventoryTransaction ).then( (result) => {
                
                this.hideModal('inventoryTransactionModal');
                this.updateTableData();
            });
        },
        openModal(ref) {
            this.$refs[ref].show();
        },
        hideModal(ref) {
            this.$refs[ref].hide();
        },
        selectInventoryVariant( inventory_item ){
            this.newInventoryTransaction.inventory_item = inventory_item._id;
            this.newInventoryTransaction.variant_sku = inventory_item.variant.sku;
            this.newInventoryTransaction.min_quantity   = inventory_item.quantity;
            this.newInventoryTransaction.location_name = inventory_item.location.name;
            this.openModal('inventoryTransactionModal');
        },
        async updateTableData(){
            this.isTableBusy = true;
            this.paginateDetails.currentPage = 1;
            this.onChangePage(1);
            this.updatePaginateTable([]);
            
            await this.getInventoryVariantData().then( (result_orders) => {
                
                this.listItems = this.getterInventoryVariants;
                this.inventory_items = this.getterInventoryVariants.reduce( (previous_item, current_item) => {
                    
                    if( current_item.expired_status != 'expired' ){
                        previous_item.push({ label: `${ current_item.variant.sku } - ${ current_item.location.name } - ${ moment(current_item.expired_at.toString().split(".")[0]).calendar() }`, id: current_item._id, value: current_item });
                    }
                    return previous_item;
                }, []);
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
        }
    }
}
</script>