import { BlogHero } from "@/views/blog/[slug]/BlogHero";
import { PortableTextRenderer } from "@/views/blog/[slug]/PortableTextRenderer";
import type { BlogPost } from "@/sanity/queries";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

type BlogSlugIndexRouteProps = {
  post: BlogPost;
};

const BlogSlugIndexRoute = ({ post }: BlogSlugIndexRouteProps) => {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <Navbar />
      <div className="common-frame-box py-12">
        <BlogHero post={post} />
        <article className="md:mt-20 mt-10 space-y-4">
          <PortableTextRenderer value={post.content} />
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default BlogSlugIndexRoute;
