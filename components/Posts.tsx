import { faker } from '@faker-js/faker'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'
import { db } from '../firebase'
import { Post } from './Post'

export function Posts() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		onSnapshot(
			query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
			(snapshot) => {
				setPosts(snapshot.docs)
			}
		)
	}, [db])

	return (
		<div>
			{posts &&
				posts.map((post) => (
					<Post
						key={post.data().timestamp}
						id={post.data().timestamp}
						username={post.data().username}
						userImg={post.data().profileImg}
						img={post.data().image}
						caption={post.data().caption}
					/>
				))}
		</div>
	)
}
