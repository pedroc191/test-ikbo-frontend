<template>
    <div class="content-profile-image">
        <div :class="{ 'image-level': ['menu', 'sidebar'].includes(position), 'image-level-top': position == 'topbar' }"></div>
        <div :class="{ 'top-profile-image': position == 'topbar', 'custom-content-icon p-relative': ['menu', 'sidebar'].includes(position) }">
            <svg :class="{ 'image-level': position == 'topbar', 'profile-image': ['menu', 'sidebar'].includes(position), 'rounded-circle': true }" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 22 22">
                <g id="Grupo_4" data-name="Grupo 4" transform="translate(215.304 -267.035)" fill="#303030">
                    <path id="Trazado_5" data-name="Trazado 5" d="M-192.652,279.259c-.085.53-.136,1.065-.256,1.589a11.3,11.3,0,0,1-2.628,5.089c-.315.353-.66.673-1,1a.236.236,0,0,1-.375.018,2.3,2.3,0,0,0-.491-.3c-1.108-.553-2.209-1.118-3.324-1.656a1.645,1.645,0,0,1-1.008-1.611,2.69,2.69,0,0,1,.551-1.941,5.111,5.111,0,0,0,.862-1.758.438.438,0,0,1,.235-.271,1.056,1.056,0,0,0,.628-1.008c-.007-.5-.006-1,0-1.5a.973.973,0,0,0-.243-.691.473.473,0,0,1-.121-.342c0-.685,0-1.371,0-2.056a2.854,2.854,0,0,0-2.1-3.019,6.408,6.408,0,0,0-4.274.064,2.83,2.83,0,0,0-1.93,2.851c.005.707,0,1.415.006,2.122a.532.532,0,0,1-.141.4.835.835,0,0,0-.221.587c0,.56,0,1.12,0,1.68a.94.94,0,0,0,.341.717.769.769,0,0,1,.231.39,7.292,7.292,0,0,0,1.185,2.429.544.544,0,0,1,.111.348c0,.383-.006.767,0,1.149a1.349,1.349,0,0,1-.738,1.288c-.923.509-1.848,1.011-2.772,1.517a6.661,6.661,0,0,0-1,.6c-.116.093-.193.058-.286-.025a12.06,12.06,0,0,1-1.829-2.032,10.93,10.93,0,0,1-2-5.274,11.085,11.085,0,0,1,2.528-8.445,10.869,10.869,0,0,1,6.436-3.886,11.016,11.016,0,0,1,9.51,2.359,11.1,11.1,0,0,1,4.017,7.13c.038.239.064.48.1.72Z" transform="translate(0)" fill="#FFFFFF"></path>
                </g>
            </svg>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props: ["position", "getterLevel"],
    data() {
        return {
        }
    },
    async mounted() {
    },
    computed: {
        ...mapGetters({
            getterUser: "getterUser"
        }),
    },
    methods: {
    }
}
</script>