<template>
    <validation-observer v-slot="{ handleSubmit, reset }" tag="div" class="custom-form">
        <b-form id="register-password" @submit.prevent="handleSubmit( updatePassword )" @reset.prevent="reset" autocomplete="off">
            <validation-provider rules="required" v-slot="{ errors }" name="password" class="field-validate">
                <b-form-group label="Enter your new password" label-for="password" label-align-sm="top" label-size="sm" label-class="font-color-dark mb-2 font-weight-normal" :class="`${ !errors[0] ? '' : 'field-error' }`">
                    <b-input-group class="mb-4">
                        <b-form-input :type="`${ showPassword ? 'text' : 'password' }`" v-model="data_password.password" placeholder="Enter your new password" name="password"/>
                        <span class="field-error-msg">{{ errors[0] }}</span>
                        <b-input-group-append>
                            <b-button class="show-password-icon" @click="showPassword = !showPassword;">
                                <i :class="`fa-solid ${ showPassword ? 'fa-eye-slash' : 'fa-eye' }`"></i>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </validation-provider>
            <validation-provider rules="required|confirmed:password" v-slot="{ errors }" name="Password Confirmation" class="field-validate">
                <b-form-group label="Confirm your new password" label-for="password_confirmation" label-align-sm="top" label-size="sm" label-class="font-color-dark mb-2 font-weight-normal" :class="`${ !errors[0] ? '' : 'field-error' }`">
                    <b-input-group class="mb-4">
                        <b-form-input :type="`${ showConfirmPassword ? 'text' : 'password' }`" v-model="data_password.passwordConfirmation" placeholder="Confirm your new password" name="password_confirmation"/>
                        <span class="field-error-msg">{{ errors[0] }}</span>
                        <b-input-group-append>
                            <b-button class="show-password-icon" @click="showConfirmPassword = !showConfirmPassword;">
                                <i :class="`fa-solid ${ showConfirmPassword ? 'fa-eye-slash' : 'fa-eye' }`"></i>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </validation-provider>
            <div class="d-flex justify-content-end">
                <b-button type="submit" class="btn btn-solid shadow-sm">Update Password</b-button>
                <b-button type="reset" class="d-none" id="reset-form">Reset Form</b-button>
            </div>
        </b-form>
    </validation-observer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: ['email'],
    data() {
        return { 
            showPassword: false,
            showConfirmPassword: false,
            data_password: {
                password: null,
                passwordConfirmation: null
            }
        };
    },
    async mounted(){
    },
    computed: {
        ...mapGetters({
            getterLogin: 'getterLogin'
        })
    },
    methods: {
        ...mapActions({
            updateUserPassword: 'updateUserPassword'
        }),
        updatePassword(){
            
            this.$root.$emit('change-loading', true);
            this.updateUserPassword({ email: this.email, password: this.data_password.password }).then( (result_password) => {
                    
                this.data_password.password = null;
                this.data_password.passwordConfirmation = null;
                if( this.getterLogin ){

                    document.getElementById('reset-form').click();
                }
                else{

                    this.$router.push('/account/login');
                }
                
                this.$root.$emit('change-loading', false);
            });
        }
    }
}
</script>