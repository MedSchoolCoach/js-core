import UserClient from './core/UserClient';

const userClient = {
    create: function (config) {
        return new UserClient(config);
    }
}

export default userClient;
