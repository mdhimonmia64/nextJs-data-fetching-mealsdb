import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default async function Posts() {
    const posts = await getPosts();
  return (
    <div className="gap-3 grid grid-cols-4 ">
        {
            posts.map((singlePost) => {
                return (
                    <div className="border border-2" key={singlePost.id}>
                        <p>{singlePost.title}</p>
                        <Link className="bg-blue-500 p-1 rounded text-white" href={`/posts/${singlePost.id}`}>Details</Link>
                    </div>
                )
            })
        }
    </div>
  )
}
