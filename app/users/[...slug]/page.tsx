'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
  searchParams: { sortOrder: string}
  params: {slug : string[]}
}
const NewUserPage = ({searchParams: {sortOrder}, params: {slug}}: Props) => {
  const route = useRouter();
  return (
    <>
      <button className='btn btn-success text-white' onClick={() => route.push('/users')}>Go back</button>

    </>
   
  )
}

export default NewUserPage