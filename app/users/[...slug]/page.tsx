import React from 'react'

interface Props {
  params: { slug: string[]}
}
const NewUserPage = ({params: {slug}}: Props) => {
  return (
    <div>{slug}</div>
  )
}

export default NewUserPage