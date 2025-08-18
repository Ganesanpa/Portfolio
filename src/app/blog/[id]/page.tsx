// remove your old type Props

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

// Correct Props type for App Router
interface BlogPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground">{post.summary}</p>
    </main>
  );
}
