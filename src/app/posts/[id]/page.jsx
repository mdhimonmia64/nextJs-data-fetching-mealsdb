import React from 'react'

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
}

export default async function SinglePost({params}) {
    const p = await params;
    const singlePost = await getSinglePost(p.id)
  return (
    <div className='border border-2'>
        <p className='text-2xl font-bold'>{singlePost.title}</p>
        <p>{singlePost.body}</p>
    </div>
  )
}
