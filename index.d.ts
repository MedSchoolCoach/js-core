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
    $authClient: AuthClientInstance
  }

  interface NuxtAppOptions {
    $authClient: AuthClientInstance
  }
}
