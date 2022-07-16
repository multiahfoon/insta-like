export interface Suggestion {
  address: string
  avatar: string
  birthdate: string
  company: string
  email: string
  id: string
  name: string
  password: string
  username: string
}

export interface Providers {
  providers: {
    google: {
      id: string
      name: string
      type: string
      signinUrl: string
      callbackUrl: string
    }
  }
}
