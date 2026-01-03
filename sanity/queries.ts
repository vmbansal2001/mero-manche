import type { SanityImageSource } from "@sanity/image-url";
import type { TypedObject } from "@portabletext/types";

export type BlogListItem = {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  created?: string;
  coverImage?: SanityImageSource | null;
};

export type BlogPost = BlogListItem & {
  content: TypedObject | TypedObject[] | null;
};

export const blogListQuery = `*[_type == "blog"] | order(coalesce(created, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  created,
  coverImage
}`;

export const blogBySlugQuery = `*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  created,
  coverImage,
  content
}`;
