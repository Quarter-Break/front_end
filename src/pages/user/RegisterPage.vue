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
                    <Title text="Register"/>
                    <div class="my-6 py-6">
                        <v-text-field
                                label="Username"
                                :rules="usernameRules"
                                hide-details="auto"
                                v-model="username"
                        />
                        <v-text-field
                                class="pt-6"
                                label="Email"
                                :rules="emailRules"
                                hide-details="auto"
                                v-model="email"
                        />
                        <v-text-field
                                type="password"
                                class="pt-6"
                                label="Password"
                                :rules="passwordRules"
                                hide-details="auto"
                                v-model="password"
                        />
                    </div>
                    <v-btn
                            color="primary"
                            block
                            v-on:click="register"
                    >
                        Register
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Title from "../../components/Title";
    import user_service from "../../javascript/axios/user/user_service";

    export default {
        name: "RegisterPage",
        components: {
            Title
        },
        data: () => ({
            username: "",
            email: "",
            password: "",
            usernameRules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 50 || 'Max 50 characters',
            ],
            emailRules: [
                value => !!value || 'Required.',
                value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            ],
            passwordRules: [
                value => !!value || 'Required.',
                value => {
                    const pattern = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,50})$/;
                    return pattern.test(value) || 'Password must contain at least one capital letter, special character and must be between 8 and 50 characters.'
                }
            ],
        }),
        methods: {
            async register() {
                const registerRequest = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };

                let response = await user_service.register(registerRequest);
                if (response.status === 200) {
                    let authRequest = {
                        id: response.data.id,
                        username: response.data.username,
                        token: response.data.token
                    };
                    this.$store.dispatch("login", authRequest).then(() => {
                        this.$router.push("/home");
                    });
                }

                console.log(response);
            }
        }
    }
</script>

<style scoped>

</style>