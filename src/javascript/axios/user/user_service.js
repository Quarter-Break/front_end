import repository from "../repository";

const resource = '/user';

export default {
    register(registerRequest) {
        return repository.post(`${resource}`, registerRequest);
    },

    login(loginRequest){
        return repository.post(`${resource}/login`, loginRequest);
    }
}