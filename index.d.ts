export interface Config {
    authToken: string;
    baseUrl: string;
}

export interface User {
    id?: string;
    email?: string;
    phone?: string;
    emailVerified?: boolean;
    name?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
    additional?: any;
}

export interface UserClientInstance {
    setToken(token: string): UserClientInstance;
    get(): Promise<User>;
    update(user: User): Promise<void>;
}

export interface UserClientStatic {
    create(config: Config): UserClientInstance;
}

declare const userClient: UserClientStatic;

export default userClient;
