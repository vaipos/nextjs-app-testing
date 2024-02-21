
import Link from 'next/link';
import React from 'react';

const Comp1 = () => {
  return (
    <>
     

      <div className="flex justify-between my-4  ">
        <Link href='/' className='mx-10 font-Poppins'>Logo</Link>
        <div className='px-10'>
          <Link href='/' className= 'px-10 '>Chat</Link>
          <Link href='/' className= 'px-10'>Quiz</Link>
          <Link href='/users' className= 'px-10'>Users</Link>
        </div>   
      </div>
    </>
  );
};

export default Comp1;
