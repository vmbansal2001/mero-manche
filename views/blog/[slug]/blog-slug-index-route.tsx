import { BlogHero } from "@/views/blog/[slug]/BlogHero";
import { PortableTextRenderer } from "@/views/blog/[slug]/PortableTextRenderer";
import type { BlogPost } from "@/sanity/queries";

type BlogSlugIndexRouteProps = {
  post: BlogPost;
};

const BlogSlugIndexRoute = ({ post }: BlogSlugIndexRouteProps) => {
  return (
    <main className="common-frame-box py-12">
      <BlogHero post={post} />
      <article className="mt-20 space-y-4">
        <PortableTextRenderer value={post.content} />
      </article>
    </main>
  );
};

export default BlogSlugIndexRoute;
