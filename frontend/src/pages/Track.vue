<template>
    <v-container>
        <h1 class="text-h2 font-weight-bold">{{track.title}}</h1>
        <h1 class="text-h2 font-weight-thin">Artist: {{track.artistId}}</h1>
    </v-container>
</template>

<script>
    import track_service from "../javascript/axios/tracks/track_service";

    export default {
        name: "Track",
        data() {
            return {
                id: this.$route.params.id,
                track: {
                    type: Object
                }
            }
        },
        beforeMount() {
            track_service.getById(this.id).then((response) => {
                this.track = response.data;
            });
        }
    }
</script>

<style scoped>

</style>