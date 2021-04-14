<template>
    <div>
        <v-img
                :src="require(`../../public/images/${image}`)"
                gradient="to bottom, rgba(255,255,255,.4), rgba(255,255,255,.9)"
                max-height="48vh"
                position="top"
        >
            <v-container fluid class="bottom">
                <h1 class="text-h4 font-weight-thin">Featured</h1>
                <h1 class="text-h2 font-weight-bold">{{artist}}</h1>
            </v-container>
        </v-img>

        <v-container>
            <div class="d-flex wrapping">
                <v-col>
                    <h1 class="text-h4 font-weight-thin">About {{artist}}</h1>
                    <p class="text-body-1">{{about}}</p>
                </v-col>
                <v-divider vertical class="mx-3 mt-3"/>
                <v-col>
                    <h1 class="text-h4 font-weight-thin">Top tracks</h1>
                    <v-list>
                        <v-list-item-group
                                v-model="selectedTrack"
                                color="primary"
                        >
                            <v-list-item
                                    class="pl-0"
                                    v-for="(track, i) in topTracks"
                                    :key="i"
                            >
                                <v-list-item-avatar>
                                    {{track.rank}}
                                </v-list-item-avatar>
                                <v-list-item-avatar>
                                    <v-img
                                            src="../../public/images/album_cover_example.jpg"
                                    />
                                </v-list-item-avatar>
                                <v-list-item-content class="ml-3">
                                    <v-list-item-title>{{track.title}}</v-list-item-title>
                                    <v-list-item-subtitle>Album</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>03:41</v-list-item-action>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </div>
        </v-container>
        <v-container>
            <v-carousel
                    cycle
                    height="600"
                    hide-delimiter-background
                    show-arrows-on-hover
            >
                <v-carousel-item
                        v-for="(album, i) in albums"
                        :key="i"
                >
                    <v-sheet
                            :color="colors[i]"
                            height="100%"
                    >
                        <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                        >
                            <div class="display-3">
                                {{ album.title }}
                            </div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
            <v-btn color="primary" class="my-6" block>Learn more</v-btn>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: () => ({
            artist: "Rocket Baby Dolls",
            image: "example-bg.png",
            about: "Rocket Baby Dolls are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of " +
                "Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), " +
                "and Dominic Howard (drums).\n" +
                "\n" +
                "Rocket Baby Dolls released their debut album, Showbiz, in 1999, showcasing Bellamy's falsetto and a " +
                "melancholic alternative rock style. Their second album, Origin of Symmetry (2001), incorporated wider " +
                "instrumentation and romantic classical influences, featured their acclaimed cover of \"Feeling Good\", and " +
                "earned them a reputation for energetic live performances.[1] Absolution (2003) saw further classical " +
                "influence, with strings on tracks such as \"Butterflies and Hurricanes\", and was the first of six " +
                "consecutive UK number-one albums. ",
            topTracks: [
                {title: "Creep", rank: 1},
                {title: "Apocalypse Please", rank: 2},
                {title: "When the Sun Goes Down", rank: 3},
                {title: "Execution Commentary", rank: 4},
                {title: "Violet Hill", rank: 5},
            ],
            selectedTrack: null,
            albums: [
                {title: "Showbizz"},
                {title: "Origin of Symmetry"},
                {title: "Absolution"},
                {title: "Black Holes and Revelations"},
                {title: "The Resistance"}
            ],
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        })
    }
</script>

<style scoped>
    .bottom {
        position: absolute;
        bottom: 0;
    }

    .wrapping {
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media (max-width: 960px) {
        .wrapping {
            flex-wrap: wrap;
            flex-direction: column;
        }
    }
</style>
