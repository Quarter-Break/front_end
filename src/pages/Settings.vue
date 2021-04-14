<template>
    <v-container>
        <h1 class="text-h2">Settings</h1>
        <v-btn v-on:click="test">Test</v-btn>
    </v-container>
</template>

<script>
    import trackservice from "../javascript/axios/tracks/streaming_service";

    export default {
        name: "Settings",
        methods: {
            test() {
                const id = "6061c90b2658b9001e65311d";

                trackservice.getTrack(id);
            }
        }
    }
</script>

<style scoped>

</style>
