import { Type } from './g:/Descargas/curso-typescript-codigo-inicial/curso-typescript-codigo-inicial/src/interfaces/pokemon';
<template>
    <validation-provider v-if="['text', 'email'].includes(field_type) && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <b-form-input :type="field_type" v-model="local_field_value" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="['text', 'email'].includes(field_type)" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" class="form-floating">
        <b-form-input :type="field_type" v-model="local_field_value" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
    </b-form-group>
    <validation-provider v-else-if="['number'].includes(field_type) && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <b-form-input type="text" v-number-only v-model="local_field_value" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="['number'].includes(field_type)" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" class="form-floating">
        <b-form-input type="text" v-number-only v-model="local_field_value" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
    </b-form-group>
    <validation-provider v-else-if="['date'].includes(field_type) && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <b-form-datepicker v-model="local_field_value" :id="field_id" :name="field_name" :min="field_min_value" :max="field_max_value" locale="en" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)">
                <template #button-content class="w-100">
                    <b-input-group>
                        <b-input-group-append>
                            <i class="fa-solid fa-calendar-day"></i>
                        </b-input-group-append>
                    </b-input-group>
                </template>
            </b-form-datepicker>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <validation-provider v-else-if="['password'].includes(field_type) && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label  font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <b-input-group>
                <b-form-input  :type="`${ showPassword ? 'text' : 'password' }`" v-model="local_field_value" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
                <span class="field-error-msg">{{ errors[0] }}</span>
                <b-input-group-append>
                    <b-button class="show-password-icon" @click="showPassword = !showPassword;">
                        <i :class="`fa-solid ${ showPassword ? 'fa-eye-slash' : 'fa-eye' }`"></i>
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>
    </validation-provider>
    <validation-provider v-else-if="['password-confirmation'].includes(field_type) && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <b-input-group>
                <b-form-input :type="`${ showPasswordConfirmation ? 'text' : 'password' }`" v-model="local_field_value" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
                <span class="field-error-msg">{{ errors[0] }}</span>
                <b-input-group-append>
                    <b-button class="show-password-icon" @click="showPasswordConfirmation = !showPasswordConfirmation;">
                        <i :class="`fa-solid ${ showPasswordConfirmation ? 'fa-eye-slash' : 'fa-eye' }`"></i>
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="field_type == 'phone'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value.phoneNumber != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" class="form-floating form-group-phone" >
        <b-input-group class="custom-input-group" id="group-phone-code">
            <template #prepend>
                <v-select class="select-phone-code" name="Country Code" required :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value.countryPhoneCode" @input="updateFieldValue( getFieldValue )" :clearable="false" :searchable="false">
                    <template #selected-option="{ id, label, name, phone_code, flag }">
                        <img :src="`${ back_url }${ flag }`" :title="name" :alt="label" width="20px" height="14px" class="d-inline-flex mr-2"/>
                        +{{ phone_code }}
                    </template>
                    <template #option="{ id, label, name, phone_code, flag }">
                        <img :src="`${ back_url }${ flag }`" :title="name" :alt="label" width="20px" height="14px" class="d-inline-flex"/>
                        <span class="mr-2 country-name">{{ name }}: <strong>+{{ phone_code }}</strong></span>
                    </template>
                </v-select>
            </template>
            <validation-provider v-if="valid_rules" :rules="valid_rules" tag="div" :name="label" class="field-validate valid-custom-input" v-slot="{ errors }">
                <b-form-input type="text" v-number-only v-model="local_field_value.phoneNumber" :id="field_id" :name="field_name" placeholder="" :class="`${ !errors[0] ? '' : 'field-error' }`" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
                <span class="field-error-msg">{{ errors[0] }}</span>
            </validation-provider>
            <b-form-input v-else type="text" v-number-only v-model="local_field_value.phoneNumber" :id="field_id" :name="field_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
        </b-input-group>
    </b-form-group>
    <validation-provider v-else-if="field_type == 'country' && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <v-select :ref="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false">
                <template #selected-option="{ label, flag }">
                    <img :src="`${ back_url }${ flag }`" :title="label" :alt="label" width="20px" height="14px" class="d-inline-flex mr-2"/>
                    {{ label }}
                </template>
                <template #option="{ id, label, flag }">
                    <img :src="`${ back_url }${ flag }`" :title="label" :alt="label" width="20px" height="14px" class="d-inline-flex"/>
                    <span class="mr-2 country-name">({{ id }}) <strong>{{ label }}</strong></span>
                </template>
            </v-select>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="field_type == 'country'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" class="form-floating">
        <v-select :ref="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false">
            <template #selected-option="{ label, flag }">
                <img :src="`${ back_url }${ flag }`" :title="label" :alt="label" width="20px" height="14px" class="d-inline-flex mr-2"/>
                {{ label }}
            </template>
            <template #option="{ id, label, flag }">
                <img :src="`${ back_url }${ flag }`" :title="label" :alt="label" width="20px" height="14px" class="d-inline-flex"/>
                <span class="mr-2 country-name">({{ id }}) <strong>{{ label }}</strong></span>
            </template>
        </v-select>
    </b-form-group>
    <validation-provider v-else-if="field_type == 'state' && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <v-select :ref="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false"></v-select>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="field_type == 'state'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" class="form-floating">
        <v-select :ref="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false"></v-select>
    </b-form-group>
    <validation-provider v-else-if="['address'].includes(field_type) && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="`${ field_name }`" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" :class="`google-address form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <b-form-input type="text" v-model="local_field_value" :id="`${ field_id }`" :ref="`${ field_id }`" :name="`${ field_name }`" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="['address'].includes(field_type)" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" :class="`form-floating ${ 'field-error' }`">
        <b-form-input type="text" v-model="local_field_value" :id="`${ field_id }`" :name="`${ field_name }`" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
    </b-form-group>
    <b-form-group v-else-if="field_type.indexOf('select_address') >= 0" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != null || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" class="form-floating mb-0 select-address-list">
        <v-select :id="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false" :searchable="false" class="select-address">
            <template #selected-option="{ id, label, value }">
                <b-row v-if="id != 'new-address'" class="option-address-template m-0 selected-option">
                    <b-col :cols="(( field_type == 'select_address' && ( value?.default_shipping || value?.default_billing ) ) || ( field_type == 'select_address_shipping' && value?.default_shipping ) || ( field_type == 'select_address_billing' && value?.default_billing )) ? 9 : 12" class="p-0">
                        <p class="chunk-lines chunk-lines-1 mb-1">{{ value?.first_name }} {{ value?.last_name }}, {{ value?.address_1 }}</p>
                        <p class="opacity-text chunk-lines chunk-lines-1">{{ value?.city }} {{ value?.state_code != null ? `${ value?.state_code }` : '' }} {{ value?.zip }}, {{ value?.country }}</p>
                    </b-col>
                    <b-col v-if="(( field_type == 'select_address' && ( value?.default_shipping || value?.default_billing ) ) || ( field_type == 'select_address_shipping' && value?.default_shipping ) || ( field_type == 'select_address_billing' && value?.default_billing ))" cols="3" class="d-flex align-items-center default-option p-0">
                        <p v-if="['select_address', 'select_address_shipping'].includes(field_type) && value?.default_shipping && !value?.default_billing" class="text-center">Default Shipping</p>
                        <p v-else-if="['select_address', 'select_address_billing'].includes(field_type) && !value?.default_shipping && value?.default_billing" class="text-center">Default Billing</p>
                        <p v-else-if="value?.default_shipping && value?.default_billing" class="text-center">Default Address</p>
                    </b-col>
                </b-row>
            </template>
            <template #option="{ id, label, value }">
                <b-row v-if="id != 'new-address'" class="option-address-template m-0 py-2">
                    <b-col :cols="(( field_type == 'select_address' && ( value?.default_shipping || value?.default_billing ) ) || ( field_type == 'select_address_shipping' && value?.default_shipping ) || ( field_type == 'select_address_billing' && value?.default_billing )) ? 9 : 12" class="p-0">
                        <p class="chunk-lines chunk-lines-1 mb-1">{{ value?.first_name }} {{ value?.last_name }}, {{ value?.address_1 }}</p>
                        <p class="opacity-text chunk-lines chunk-lines-1">{{ value?.city }} {{ value?.state_code != null ? `${ value?.state_code }` : '' }} {{ value?.zip }}, {{ value?.country }}</p>
                    </b-col>
                    <b-col v-if="(( field_type == 'select_address' && ( value?.default_shipping || value?.default_billing ) ) || ( field_type == 'select_address_shipping' && value?.default_shipping ) || ( field_type == 'select_address_billing' && value?.default_billing ))" cols="3" class="d-flex align-items-center default-option p-0">
                        <p v-if="['select_address', 'select_address_shipping'].includes(field_type) && value?.default_shipping && !value?.default_billing" class="text-center">Default Shipping</p>
                        <p v-else-if="['select_address', 'select_address_billing'].includes(field_type) && !value?.default_shipping && value?.default_billing" class="text-center">Default Billing</p>
                        <p v-else-if="value?.default_shipping && value?.default_billing" class="text-center">Default Address</p>
                    </b-col>
                </b-row>
            </template>
        </v-select>
    </b-form-group>
    <validation-provider v-else-if="field_type == 'v-select' && valid_rules != null" :rules="valid_rules" tag="div" :name="label" class="field-validate" v-slot="{ errors }">
        <b-form-group :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" :class="`form-floating ${ !errors[0]  ? '' : 'field-error' }`">
            <v-select :ref="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false"></v-select>
            <span class="field-error-msg">{{ errors[0] }}</span>
        </b-form-group>
    </validation-provider>
    <b-form-group v-else-if="field_type == 'v-select'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-floating">
        <v-select :ref="field_id" :name="field_name" placeholder="" :options="local_select_data" :reduce="(item) => item.id" v-model="local_field_value" @input="updateFieldValue( getFieldValue )" :clearable="false"></v-select>
    </b-form-group>
    <b-form-group v-else-if="field_type == 'radio'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-floating">
        <b-input-group class="custom-input-group">
            <b-form-radio-group v-model="local_field_value" :name="field_name" class="d-flex align-items-center justify-content-around mt-3 w-100">
                <b-form-radio v-for="(item_radio, index_radio) in local_select_data" v-if="item_radio.show" :key="`${ field_name }-${ index_radio }`" :value="item_radio.value" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )">{{ item_radio.label }}</b-form-radio>
            </b-form-radio-group>
        </b-input-group>
    </b-form-group>
    <b-form-group v-else-if="field_type == 'radio-yn-text'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-floating">
        <b-input-group class="custom-input-group justify-content-around">
            <b-form-radio-group v-model="local_field_value.value" :name="field_name" class="d-flex align-items-center justify-content-around mt-3 w-40">
                <b-form-radio v-for="(item_radio, index_radio) in local_select_data" :key="`${ field_name }-${ index_radio }`" :value="item_radio.value">{{ item_radio.label }}</b-form-radio>
            </b-form-radio-group>
            <validation-provider v-for="(item_radio, index_radio) in local_select_data"  :key="`${ field_name }-${ index_radio }-field-text`" v-if="item_radio.field_text_name != null && local_field_value.value == item_radio.value" :rules="'required'" tag="div" :name="label" :class="`field-validate mt-3 w-60`" v-slot="{ errors }">
                <b-form-group :label="item_radio.field_text_label" :label-for="item_radio.field_text_name" label-align-sm="top" label-size="sm" :label-class="`${ local_field_value.name != '' || getFieldFocus ? 'floating-label ' : '' }font-color-dark font-weight-normal`" :class="`form-floating mb-0${ !errors[0]  ? '' : ' field-error' }${ getFieldValue.value ? '' : ' d-none' }`">
                    <b-form-input type="text" v-model="local_field_value.name" :id="item_radio.field_text_id" :name="item_radio.field_text_name" placeholder="" @change="updateFieldValue( getFieldValue )" @input="updateFieldValue( getFieldValue )" @focus="updateFieldFocus(true)" @blur="updateFieldFocus(false)"/>
                    <span class="field-error-msg">{{ errors[0] }}</span>
                </b-form-group>
            </validation-provider>
        </b-input-group>
    </b-form-group>
    <b-form-group v-else-if="field_type == 'checkbox-social'" :label="label" :label-for="field_name" label-align-sm="top" label-size="sm" :label-class="`floating-label font-color-dark font-weight-normal`" class="form-floating">
        <b-row class="mx-0">
            <b-col v-for="(item_check, index_check) in local_select_data" :key="`social-${ item_check.type }-${ index_check }`" cols="12" class="social-media-item pl-0 mt-4">
                <b-input-group class="custom-input-group mb-0 checkbox-social-network">
                    <b-input-group-prepend :class="`${ item_check.active ? 'show-user': '' }`">
                        <b-form-checkbox v-model="item_check.active" :class="`d-flex align-items-center mb-0`">
                            <i v-if="item_check.icon != null" :class="`${ item_check.icon } fa-2x`"></i>
                        </b-form-checkbox>
                    </b-input-group-prepend>
                    <div class="field-validate valid-custom-input">
                        <b-form-input type="text" v-model="item_check.user" class="social-media-user" :disabled="!item_check.active" placeholder="@" :name="`user-${ item_check.type }`" :class="`${ item_check.active ? 'show-user': '' }`" @change="updateFieldMultiValue( index_check, item_check )" @input="updateFieldMultiValue( index_check, item_check )"/>
                    </div>
                </b-input-group>
            </b-col>
        </b-row>
    </b-form-group>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        }, 
        field_id: {
            type: String,
            default: ''
        }, 
        field_name: {
            type: String,
            default: ''
        }, 
        field_type: {
            type: String,
            default: 'text'
        },
        field_value: {
            default: ''
        }, 
        field_min_value: {
        }, 
        field_max_value: {
        }, 
        valid_rules: {
            type: String,
            default: null
        },
        select_data: {
        }
    },
    data() {
        return {
            back_url            : process.env.VUE_APP_TEST_API_URL_FILE,
            local_field_value   : this.field_value,
            local_select_data   : this.select_data,
            field_focus         : false,
            country_code_address: 'US',
            state_code_address  : 'AL',
            googel_autocomplete : null,
            showPassword: false,
            showPasswordConfirmation: false,
        };
    },
    directives: {
        'number-only': {
            bind (el) {
                function checkValue (event) {
                    event.target.value = event.target.value.replace(/[^0-9]/g, '')
                    if (event.charCode >= 48 && event.charCode <= 57) {
                        return true
                    }
                    event.preventDefault()
                }
                el.addEventListener('keypress', checkValue)
            }
        },
        'letter-only': {
            bind (el) {
                function checkValue (event) {
                    if (event.charCode >= 48 && event.charCode <= 57) {
                        event.preventDefault()
                    }
                    return true
                }
                el.addEventListener('keypress', checkValue)
            }
        }
    },
    async mounted(){
        
        this.$root.$on('update-country-address', this.updateCountryCodeAddress);
        this.$root.$on('update-state-address', this.updateStateCodeAddress);
        if( this.field_id == 'address_1' && this.field_type == 'address' ){
            this.initAutocomplete();
        }
    },
    computed: {
        getFieldFocus(){
            return this.field_focus;
        },
        getFieldValue(){
            return this.local_field_value;
        },
        getSelectData(){
            return this.local_select_data;
        },
        getCountryCodeAddress(){
            return this.country_code_address;
        },
        getStateCodeAddress(){
            return this.state_code_address;
        }
    },
    methods: {
        initAutocomplete() {
            this.googel_autocomplete = new google.maps.places.Autocomplete( document.querySelector(`#${ this.field_id }`), {
                fields: ["address_components", "geometry"],
                types: ["address"],
            } );
            this.googel_autocomplete.addListener("place_changed", this.selectGoogelAddress);
        },
        selectGoogelAddress() {
            this.local_field_value  = "";
            let address1            = "";
            let google_address      = {
                street_number               : "",
                subpremise                  : "",
                route                       : "",
                locality                    : "",
                administrative_area_level_1 : "",
                country                     : "",
                postal_code                 : "",
                postal_code_suffix          : ""
            };
            for (const component of (this.googel_autocomplete.getPlace()?.address_components || [])) {
                // @ts-ignore remove once typings fixed
                const componentType = component.types[0];
                
                switch (component.types[0]) {
                    case "street_number": {
                        google_address.street_number = component.long_name;
                        break;
                    }
                    case "subpremise": {
                        google_address.subpremise = component.short_name;
                        break;
                    }
                    case "route": {
                        google_address.route = component.short_name;
                        break;
                    }
                    case "locality":{
                        google_address.locality = component.long_name;
                        break;
                    }
                    case "administrative_area_level_1": {
                        google_address.administrative_area_level_1 = component.short_name;
                        break;
                    }
                    case "country":{
                        google_address.country = component.short_name;
                        break;
                    }
                    case "postal_code": {
                        google_address.postal_code = component.long_name;
                        break;
                    }
                    case "postal_code_suffix": {
                        google_address.postal_code_suffix = component.long_name;
                        break;
                    }
                }
            }
            let new_address_value                   = `${ google_address.street_number != '' ? `${ google_address.street_number }, ` : '' }${ google_address.route }${ google_address.subpremise != '' ? ` ${ google_address.subpremise }` : '' }`;
            this.local_field_value                  = new_address_value;
            this.$refs[this.field_id].$el._value    = new_address_value;
            
            this.$root.$emit('update-field-value', { field: 'google_country_state_code', value: { country_code: google_address.country, state_code: google_address.administrative_area_level_1 } });
            this.$root.$emit('update-field-value', { field: 'city', value: google_address.locality });
            this.$root.$emit('update-field-value', { field: 'zip', value: `${ google_address.postal_code }` });
            this.$root.$emit('update-field-value', { field: 'address_1', value: new_address_value });
            
        },
        updateFieldValue(value){
            
            this.$root.$emit('update-field-value', { field: this.field_id, value: value });
        },
        updateFieldMultiValue(index, value){
            
            let selected_values = this.local_select_data.map( (item, index_item) => {
                
                return index == index_item ? value : item;
            });
            this.$root.$emit('update-field-value', { field: this.field_id, value: selected_values });
        },
        updateFieldFocus(value){
            this.field_focus = value;
        },
        updateCountryCodeAddress(contry_code){
            this.country_code_address = contry_code;
        },
        updateStateCodeAddress(contry_code){
            this.state_code_address = contry_code;
        }
    },
    watch: {
        field_value(value) {
            this.local_field_value = value;
        },
        select_data(value) {
            this.local_select_data = value || [];
        }
    }
}
</script>