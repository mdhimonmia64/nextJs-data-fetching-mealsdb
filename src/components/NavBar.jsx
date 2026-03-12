import Link from 'next/link'
import React from 'react'

export default function  NavBar() {
  return (
    <div>
        <div className=' bg-amber-500'>
            <ul className='flex justify-around '>
                <Link href='/'><li>Home</li></Link>
                <Link href='/posts'><li>posts</li></Link>
                <Link href='/meals'><li>meals</li></Link>
                <li>About</li>
            </ul>
        </div>
    </div>
  )
}
