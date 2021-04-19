import repository from "../repository";

const resource = '/user';

export default {
    register(registerRequest) {
        return repository.post(`${resource}`, registerRequest);
    }
}