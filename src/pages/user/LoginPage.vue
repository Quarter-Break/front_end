<template>
    <v-container
            fill-height
            fluid
            class="light-grey"
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col>
                <v-card
                        class="mx-auto px-9 py-9"
                        max-width="32rem"
                >
                    <Title text="Login"/>
                    <div class="my-6 py-6">
                        <v-text-field
                                label="Email"
                                hide-details="auto"
                        />
                        <v-text-field
                                type="password"
                                class="pt-6"
                                label="Password"
                                hide-details="auto"
                        />
                    </div>
                    <v-btn
                            color="primary"
                            block
                    >
                        Login
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Title from "../../components/Title";

    export default {
        name: "LoginPage",
        components: {
            Title
        },
        data() {
            return {
                email: "",
                password: ""
            }
        }
    }
</script>

<style scoped>

</style>