
interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
}
export default function BlogCard({ id, title, summary }: BlogCardProps) {
  return (
    <div className="border rounded-2xl p-4 shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{summary}</p>
      
    </div>
  );
}
