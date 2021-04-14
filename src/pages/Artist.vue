<template>
    <div>
        <v-img
                :src="require(`../../public/images/${image}`)"
                gradient="to bottom, rgba(255,255,255,.3), rgba(255,255,255,.9)"
                max-height="48vh"
                position="top"
        >
            <v-container fluid class="bottom">
                <h1 class="text-h4 font-weight-thin">Artist</h1>
                <h1 class="text-h2 font-weight-bold">{{artist}}</h1>
            </v-container>
        </v-img>

        <div class="d-flex wrapping">
            <v-col class="responsive-col">
                <v-card outlined>
                    <v-card-title class="text-h4 font-weight-thin">About {{artist}}</v-card-title>
                    <v-card-text class="text-body-1">{{about}}</v-card-text>
                    <v-divider/>
                    <v-card-title>Albums</v-card-title>
                    <v-list>
                        <v-list-item-group
                                v-model="selectedAlbum"
                                color="primary"
                        >
                            <v-list-item
                                    link
                                    v-for="(album, i) in albums"
                                    :key="i"
                            >
                                {{album.title}}
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
            <v-col>
                <v-carousel
                        class="hidden-md-and-down"
                        cycle
                        height="400"
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
                <h1 class="text-h2 my-3">{{albums[selectedAlbum].title}}</h1>
                <v-divider/>
            </v-col>
        </div>
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
            selectedAlbum: 0,
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

    .responsive-col {
        max-width: 540px;
    }

    @media (max-width: 1263px) {
        .responsive-col {
            max-width: 100%;
        }

        .wrapping {
            flex-wrap: wrap;
            flex-direction: column;
        }
    }
</style>
