<template>
    <v-app>
        <v-card
                flat
                tile
        >
            <v-app-bar
                    color="primary"
                    dark
                    hide-on-scroll
            >
                <v-app-bar-nav-icon
                        @click.stop="drawer = !drawer"
                        class="hidden-md-and-up"
                />

                <v-img
                        class="hidden-sm-and-down mr-3"
                        src="../public/images/logo_small.png"
                        contain
                        max-width="64px"
                        height="48px"
                />

                <v-img
                        class="hidden-md-and-up hidden-xs-only mr-3"
                        src="../public/images/logo_small.png"
                        contain
                        max-width="64px"
                        height="48px"
                />

                <v-spacer/>

                <v-tabs class="hidden-sm-and-down">
                    <v-tab
                            v-for="(item, i) in filteredItems"
                            :key="i"
                            v-on:click="navigate(item.link)"
                    >
                        <span>{{item.name}}</span>
                    </v-tab>
                </v-tabs>

                <v-text-field
                        class="mx-3 align-center search-width"
                        single-line
                        clearable
                        dense
                        hide-details="true"
                        placeholder="Search"
                />

                <v-icon>mdi-magnify</v-icon>

                <router-link to="/settings">
                    <v-icon class="hidden-sm-and-down ml-3 hover">
                        mdi-cog
                    </v-icon>
                </router-link>

            </v-app-bar>
        </v-card>

        <v-main style="margin-bottom: 87px;">
            <router-view/>
        </v-main>

        <MusicPlayer/>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list
                    nav
                    dense
            >
                <v-list-item-group
                        v-model="items"
                        color="primary"
                >
                    <v-list-item-title class="text-h4 font-weight-thin my-3">
                        Quarter Break
                    </v-list-item-title>
                    <v-divider/>
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    import MusicPlayer from "./components/music/MusicPlayer";

    export default {
        name: 'App',

        components: {
            MusicPlayer
        },
        methods: {
            navigate(destination) {
                if (this.$router.currentRoute.path !== destination) {
                    this.$router.push(destination).catch(() => {
                    });
                }
            }
        },
        data: () => ({
            drawer: false,
            items: [
                {
                    navbar: true,
                    name: "Home",
                    icon: "mdi-home",
                    link: "/"
                },
                {
                    navbar: true,
                    name: "Explore",
                    icon: "mdi-compass",
                    link: "/"
                },
                {
                    navbar: true,
                    name: "Friends",
                    icon: "mdi-account-group",
                    link: "/"
                },
                {
                    navbar: true,
                    name: "Profile",
                    icon: "mdi-account",
                    link: "/profile"
                },
                {
                    navbar: false,
                    name: "Settings",
                    icon: "mdi-cog",
                    link: "/"
                }
            ]
        }),
        computed: {
            filteredItems() {
                return this.items.filter(item => {
                    if (item.navbar) {
                        return item;
                    }
                })
            }
        }
    };
</script>

<style>
    .search-width {
        min-width: 260px !important;
        max-width: 320px !important;
    }

    .hover:hover {
        transform: scale(1.3) rotate(90deg);
    }
</style>
