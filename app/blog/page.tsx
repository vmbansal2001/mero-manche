import type { Metadata } from "next";
import BlogIndexRoute from "@/views/blog/blog-index-route";
import { sanityFetch } from "@/sanity/lib/client";
import { blogListQuery, type BlogListItem } from "@/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Mero Manche",
  description:
    "Stories, updates, and guides to support your family from anywhere.",
};

const Page = async () => {
  const posts = await sanityFetch<BlogListItem[]>({
    query: blogListQuery,
    revalidate,
  });

  return <BlogIndexRoute posts={posts} />;
};

export default Page;
