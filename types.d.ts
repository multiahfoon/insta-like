export interface Post {
	id: string
	username: string
	userImg: string
	img: string
	caption: string
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
