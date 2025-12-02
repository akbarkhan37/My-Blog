import Link from "next/link";
async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: { revalidate: 60 }, //ISR
    }
  );
  return res.json();
}
export default async function Home() {
  const posts = await getPosts();
  return(
    <main style={{padding:"20px"}}>
      <h1 className="mb-4">Welcome to My Blog</h1>
     <ul>
     {posts.map((post: { id: number; title: string }) =>(
      <li key={post.id}
      className="text-blue-600 hover:text-blue-800 underline">
        <Link href={`/blog/${post.id}`}>{post.title}</Link></li>
     ))}
     </ul>
     <Link href="/blog"
     className="text-blue-600 hover:text-blue-800 transtion px-2 py-2 bg-amber-600 rounded mt-3">Go to Blog Post</Link>
    </main>
  );
}
