import { SanityImage } from "@/sanity/lib/image";
import type { BlogPost } from "@/sanity/queries";

type BlogHeroProps = {
  post: BlogPost;
};

const formatDate = (value?: string) => {
  if (!value) return null;
  try {
    return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
      new Date(value)
    );
  } catch {
    return null;
  }
};

export function BlogHero({ post }: BlogHeroProps) {
  const dateLabel = formatDate(post.created);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="relative h-80 w-full overflow-hidden bg-linear-to-br from-zinc-100 to-zinc-200">
        {post.coverImage ? (
          <SanityImage
            image={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            preload
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {dateLabel ? (
            <p className="text-sm font-medium uppercase tracking-wide">
              {dateLabel}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{post.title}</h1>
          {post.shortDescription ? (
            <p className="mt-2 max-w-3xl text-base text-white/85">
              {post.shortDescription}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
