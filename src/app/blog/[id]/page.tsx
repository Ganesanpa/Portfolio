import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-600 mb-6">{post?.summary}</p>
      <div className="text-lg leading-relaxed">{post?.content}</div>
    </div>
  );
}

// ✅ Important for static site generation (fixes the build error)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}
