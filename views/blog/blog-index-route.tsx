import type { BlogListItem } from "@/sanity/queries";
import { BlogCard } from "@/views/blog/BlogCard";

type BlogIndexRouteProps = {
  posts: BlogListItem[];
};

const BlogIndexRoute = ({ posts }: BlogIndexRouteProps) => {
  return (
    <main className="common-frame-box py-16">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Blog
        </p>
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Fresh updates and stories
        </h1>
        <p className="max-w-2xl text-base text-zinc-600">
          Insights, announcements, and guides to keep you and your loved ones
          supported.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center text-zinc-600">
          No posts yet. Check back soon.
        </div>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogIndexRoute;
