import axios from 'axios';
import resources from './resources';

class UserClient {
    constructor(config) {
        this.httpClient = axios.create({
            baseURL: config.baseUrl,
            headers: {
                Authorization: config.authToken,
            },
        });
    }

    get() {
        return this.httpClient.get(resources.user).then(res => res.data);
    }

    update(user) {
        return this.httpClient.put(resources.user, user).then(res => res.data);
    }
}

export default UserClient;
