<template>
    <v-card
            class="fixed"
            tile
    >
        <v-progress-linear
                :value="progress"
                class="my-0"
                height="3"
        />

        <v-list>
            <v-list-item>
                <v-img
                        src="../../../public/images/album_cover_example.jpg"
                        max-width="68px"
                        class="mr-6"
                />
                <v-list-item-content>
                    <v-list-item-title>{{title}}</v-list-item-title>
                    <v-list-item-subtitle>{{artist}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-spacer/>

                <v-list-item-icon>
                    <v-btn icon>
                        <v-icon>mdi-rewind</v-icon>
                    </v-btn>
                </v-list-item-icon>

                <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                    <v-btn icon>
                        <v-icon>mdi-pause</v-icon>
                    </v-btn>
                </v-list-item-icon>

                <v-list-item-icon
                        class="ml-0"
                        :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                >
                    <v-btn icon>
                        <v-icon>mdi-fast-forward</v-icon>
                    </v-btn>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-card>
    <!--    </v-bottom-sheet>-->
</template>

<script>
    export default {
        name: "MusicPlayer",
        data: function () {
            return {
                title: "Hysteria",
                artist: "Muse",
                progress: 68
            }
        }
    }
</script>

<style scoped>
    .fixed{
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 10;
    }
</style>
