interface Config {
    authToken: string;
    baseUrl: string;
}

interface User {
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

interface UserClientInstance {
    setToken(token: string): UserClientInstance;
    get(): Promise<User>;
    update(user: User): Promise<void>;
}

interface UserClientStatic {
    create(config: Config): UserClientInstance;
}

declare const userClient: UserClientStatic;

declare module '@nuxt/vue-app' {
    interface Context {
        $userClient: UserClientInstance
    }

    interface NuxtAppOptions {
        $userClient: UserClientInstance
    }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
    interface Context {
        $userClient: UserClientInstance
    }

    interface NuxtAppOptions {
        $userClient: UserClientInstance
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $userClient: UserClientInstance
    }
}
