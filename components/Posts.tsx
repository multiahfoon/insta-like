import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { postsState } from '../atoms/postsAtom'
import { db } from '../firebase'
import { FakePost } from './FakePost'
import { Post } from './Post'

export function Posts() {
	const { fakePosts, posts } = useRecoilValue<any>(postsState)

	return (
		<div>
			{posts?.length
				? posts.map((post: any) => (
						<Post
							key={post.id}
							id={post.id}
							username={post.data().username}
							userImg={post.data().profileImg}
							img={post.data().image}
							caption={post.data().caption}
						/>
				  ))
				: fakePosts?.map((post: any) => (
						<FakePost
							key={post.id}
							id={post.id}
							username={post.username}
							userImg={post.profileImg}
							img={post.image}
							caption={post.caption}
						/>
				  ))}
		</div>
	)
}
