<template>
    <div class="text-center">
        <h1 class="text-h1">404</h1>
        <h3 class="text-h3 font-weight-light">Page was not found.</h3>
        <br/>
        <router-link to="/home">
            <v-btn color="secondary">Return home</v-btn>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>