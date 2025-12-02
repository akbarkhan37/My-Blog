import Link from "next/link";
//blog list page
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}
export default async function BlogList() {
  const posts = await getPosts();
  return (
    <div className="mt-5 mb-2">
      <Link
        href="/"
        className="inline-block text-white bg-blue-500 rounded-lg
      hover:bg-blue-700 px-2 py-2 transition"
      >
        Go Home
      </Link>
      <h1>Blog Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}
            className="text-blue-600 hover:text-blue-800 underline">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
