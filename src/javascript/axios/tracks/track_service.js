import repository from "../repository";

const resource = '/track';

export default {
    getById(id) {
        return repository.get(`${resource}/${id}`);
    }
}