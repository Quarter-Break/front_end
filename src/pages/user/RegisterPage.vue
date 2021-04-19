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
                <v-form v-model="valid" ref="form">
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
                            <v-text-field
                                    type="password"
                                    class="pt-6"
                                    label="Confirm password"
                                    :rules="confirmRules"
                                    hide-details="auto"
                                    v-model="passwordConf"
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
                </v-form>
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
        data() {
            return {
                valid: false,
                username: "",
                email: "",
                password: "",
                passwordConf: "",
                usernameRules: [
                    value => !!value || 'Required.',
                    value => (value || '').length <= 50 || 'Maximum 50 characters',
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
                    value => (value || '').length <= 50 || 'Maximum 50 characters',
                    value => (value || '').length >= 8 || 'Minimum 8 characters',
                    value => {
                        const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/;
                        return pattern.test(value) || 'Password must contain at least one capital letter and one number.'
                    }
                ],
                confirmRules: [
                    value => !!value || 'Required',
                    value =>
                        value === this.password || 'The passwords do not match.'
                ]
            }
        },
        methods: {
            async register() {
                if (this.$refs.form.validate()) {
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
    }
</script>

<style scoped>

</style>