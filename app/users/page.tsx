import Link from '@/node_modules/next/link';
import { sort } from 'fast-sort';
import React, { Suspense } from 'react';

interface User {
  id: number;
  title: string;
  userId: number;
}

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage= async ({ searchParams: { sortOrder } }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
  const data: User[] = await res.json();
  
  let sortedData: User[] = sortOrder == "id" && data.length > 0 ? sort(data).desc(sortOrder): data;

  return (
    <>
    <Suspense fallback= {<p>Loading...</p>}>
    <div className="">
        <Link className="btn" href = '/users/1'>Click-me</Link>
        <div className='text-2xl font-bold'>User Table</div>
        <table className='table'>
          <thead>
            <tr>
            <th><Link href="/users?sortOrder=userId">userId</Link></th>
              <th><Link href="/users?sortOrder=title">title</Link></th>
              <th><Link href="/users?sortOrder=id">id</Link></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((userData) => (
              <tr className='hover' key={userData.id}>
                <td>{userData.userId}</td>
                <td>{userData.title}</td>
                <td>{userData.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Suspense>
      
    </>
  );
};

export default UserPage;
