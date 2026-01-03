import Link from "next/link";
import { SanityImage } from "@/sanity/lib/image";
import type { BlogListItem } from "@/sanity/queries";

type BlogCardProps = {
  post: BlogListItem;
};

const formatDate = (value?: string) => {
  if (!value) return null;
  try {
    return new Intl.DateTimeFormat("en", {
      dateStyle: "medium",
    }).format(new Date(value));
  } catch {
    return null;
  }
};

export function BlogCard({ post }: BlogCardProps) {
  const dateLabel = formatDate(post.created);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-linear-to-br from-zinc-100 to-zinc-200">
        {post.coverImage ? (
          <SanityImage
            image={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
          {dateLabel ?? "New"}
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 transition group-hover:text-zinc-700">
          {post.title}
        </h3>
        {post.shortDescription ? (
          <p className="line-clamp-3 text-sm text-zinc-600">
            {post.shortDescription}
          </p>
        ) : null}
        <div className="mt-auto pt-2 text-sm font-semibold text-blue-600">
          Read more →
        </div>
      </div>
    </Link>
  );
}
