// src/app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-6">{post.summary}</p>
      <article className="prose prose-lg dark:prose-invert">
        <p>{post.content}</p>
      </article>
    </div>
  );
}

// ✅ Add this function to statically generate paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}
