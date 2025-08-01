
import { blogPosts } from "@/data/blogData";
import BlogCard from "./BlogCard";
import Carousel from "./Carousel";

export default function BlogSection() {
  const items = blogPosts.map((post) => (
    <BlogCard key={post.id} id={post.id} title={post.title} summary={post.summary} />
  ));

  return (
    <section className="py-5 px-4" id="blog">
   
      <Carousel items={items} />
    </section>
  );
}
