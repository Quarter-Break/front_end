<template>
    <h2 class="text-h4 font-weight-thin">{{text}}</h2>
</template>

<script>
    export default {
        name: "SubTitle",
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