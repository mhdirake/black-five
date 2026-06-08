import BlogSectionClient from "./_components/BlogSectionClient";

async function fetchBlogPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client/blog?limit=6`, {
      headers: { "x-client-secret": process.env.CLIENT_SECRET },
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.posts ?? [];
  } catch {
    return [];
  }
}

export default async function BlogSection() {
  const posts = await fetchBlogPosts();
  return <BlogSectionClient posts={posts} />;
}
