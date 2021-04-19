<template>
    <h1 class="text-h2 font-weight-bold">{{text}}</h1>
</template>

<script>
    export default {
        name: "Title",
        props: {
            text: {
                type: String,
                default: "Title"
            }
        }
    }
</script>

<style scoped>

</style>