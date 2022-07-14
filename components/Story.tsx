interface Props {
  imgUrl: string
  username: string
}

export function Story({ imgUrl, username }: Props) {
  return (
    <div>
      <img src={imgUrl} alt='profile picture' />
      <p>{username}</p>
    </div>
  )
}
