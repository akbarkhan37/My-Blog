import Link from "next/link";
async function getPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
//Generate static params for dynamic routes
export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      cache: "no-store",
    }
  );
  const posts = await res.json();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = await getPosts(resolvedParams.id);
  return (
    <div style={{ padding: "20px" }}>
      <Link
        href="/blog"
        className="inline-block px-5 py-2 bg-blue-500
            text-white rounded-lg hover:bg-blue-700 transtion"
      >
        Go Blog List
      </Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
