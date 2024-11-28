<template>
    <div v-if="content.type == 'request'" class="container-notification request-api">
        <h3 class="notification-title">{{ title }}</h3>
        <span class="notification-subtitle">{{ message }}</span>
    </div>
</template>
<script>
export default {
    props: ['title', 'message', 'content']
}
</script>