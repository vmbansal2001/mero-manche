import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogSlugIndexRoute from "@/views/blog/[slug]/blog-slug-index-route";
import { sanityFetch } from "@/sanity/lib/client";
import { blogBySlugQuery, type BlogPost } from "@/sanity/queries";
import { urlForImage } from "@/sanity/lib/image";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Blog | Mero Manche",
    };
  }

  const post = await sanityFetch<BlogPost | null>({
    query: blogBySlugQuery,
    params: { slug: slug ?? "" },
    revalidate,
  });

  if (!post) {
    return {
      title: "Blog | Mero Manche",
    };
  }

  const openGraphImage = post.coverImage
    ? [
        {
          url: urlForImage(post.coverImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ]
    : undefined;

  return {
    title: `${post.title} | Mero Manche`,
    description: post.shortDescription,
    openGraph: {
      images: openGraphImage,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const post = await sanityFetch<BlogPost | null>({
    query: blogBySlugQuery,
    params: { slug: slug ?? "" },
    revalidate,
  });

  if (!post) {
    return notFound();
  }

  return <BlogSlugIndexRoute post={post} />;
};

export default Page;
