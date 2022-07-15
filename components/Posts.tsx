import { faker } from '@faker-js/faker'
import { useMemo } from 'react'
import { Post } from './Post'

export function Posts() {
  const MOCK_POST_DATA = useMemo(() => {
    return [...Array(5)].map(() => {
      return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        userImg: faker.image.avatar(),
        img: faker.image.nature(),
        caption: faker.lorem.sentence(),
      }
    })
  }, [])

  return (
    <div>
      {MOCK_POST_DATA?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
