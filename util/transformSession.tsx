export function transformSession(session: any) {
	if (!session) return null

	return {
		...session,
		user: {
			...session?.user,
			username: session?.user?.name?.split(' ').join('').toLowerCase(),
			uuid: session?.token,
		},
	}
}
