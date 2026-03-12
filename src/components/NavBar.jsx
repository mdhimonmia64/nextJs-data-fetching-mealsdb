import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (

    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/posts">
              <li>posts</li>
            </Link>
            <Link href="/meals">
              <li>meals</li>
            </Link>
  
              <li>about</li>
 
          </ul>
        </div>
       <Link href='/'> <img className="w-1/6 " src="https://i.ibb.co.com/CsPRvVDN/eb759c148497eb3a49afbdc4801f4f93-removebg-preview.png" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/posts">
            <li>posts</li>
          </Link>
          <Link href="/meals">
            <li>meals</li>
          </Link>
  
            <li>about</li>

        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
