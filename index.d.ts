interface Config {
  authToken: string
  baseUrl: string
}

interface PaginatedResultLink {
  active: boolean
  label: string
  url: string
}

interface PaginatedResult<T> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: number
  links: PaginatedResultLink[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: string
  to: number
  total: number
}

interface User {
  id?: string
  email?: string
  phone?: string
  emailVerified?: boolean
  name?: string
  firstName?: string
  lastName?: string
  picture?: string
  additional?: any
}

interface Purchase {
  id?: string
  userId?: string
  productId?: string
  productName?: string
  quantity?: number
  orderId?: string
  cost?: number
  orderDate?: Date
  billingEmail?: string
  billingFirstName?: string
  billingLastName?: string
  studentFirstName?: string
  studentLastName?: string
  studentEmail?: string
}

interface UserClientInstance {
  setToken(token: string): UserClientInstance
  get(): Promise<User>
  update(user: User): Promise<void>
  getPurchases(page?: number): Promise<PaginatedResult<Purchase>>
}

interface UserClientStatic {
  create(config: Config): UserClientInstance
}

declare const userClient: UserClientStatic

interface AuthClientInstance {
  loading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
  user: {}
  getUser(): void
  getToken(): Promise<string>
}

interface AuthClientStatic {
  create(config: {}): AuthClientInstance
}

declare const authClient: AuthClientStatic

declare module '@nuxt/vue-app' {
  interface Context {
    $userClient: UserClientInstance
    $authClient: AuthClientInstance
  }

  interface NuxtAppOptions {
    $userClient: UserClientInstance
    $authClient: AuthClientInstance
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
