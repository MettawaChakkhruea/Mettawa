"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(n => n + 1);
  };

  const decrease = () => {
    setCount(d => d - 1);
  };

  const Name = "Best";

  return (
    <div className='border-4 border-red-700 flex w-full justify-center items-center h-screen'>
      <div className='border-4 border-green-700 h-fit'>
        <h1 className='text-yellow-700'>Home</h1>
        <p>{count}</p>
        <button onClick={increase}>Increase</button>
        <br />
        <button onClick={decrease}>Decrease</button>
      </div>  
      {/* <Link href={`/dynamic/${Name}`}>Go to Dynamic page</Link> */}
    </div>
  );
}
