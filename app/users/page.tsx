import Link from '@/node_modules/next/link'
import { userAgent } from 'next/server';
import React from 'react'
interface User {
  id: number;
  title: string;
  userId: number;

}
const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
  const data:User[] = await res.json();

  return (
    <>
    <div className="">
    <div className= 'text-2xl font-bold '>User Table</div>
     <table className='table'>
      <thead>
        <tr>
          <th>UserId</th>
          <th>UserName</th>
          <th>Acc_id</th>
        </tr>
      </thead>
      <tbody>
       {data.map((data) => <tr className = 'hover' key = {data.id}><td>{data.id}</td><td>{data.title}</td><td>{data.userId}</td></tr>)}
      </tbody>
     
     </table>

    </div>
   
    
     
    </>
   
  )
}

export default UserPage