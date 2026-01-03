import Image, { type ImageProps } from "next/image";
import type { ReactElement } from "react";
import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

const imageClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(imageClient);

export const urlForImage = (source: SanityImageSource) => builder.image(source);

export type SanityImageProps = Omit<ImageProps, "src" | "loader"> & {
  image: SanityImageSource;
  alt: string;
  width?: number;
  height?: number;
};

export function SanityImage({
  image,
  alt,
  width = 1200,
  height = 675,
  sizes = "(max-width: 768px) 100vw, 1100px",
  className,
  priority,
  fill,
  ...rest
}: SanityImageProps): ReactElement {
  const url = urlForImage(image).width(width).height(height).url();

  const dimensionProps = fill ? { fill: true as const } : { width, height };

  return (
    <Image
      src={url}
      alt={alt}
      sizes={sizes}
      className={className}
      priority={priority}
      {...dimensionProps}
      placeholder="empty"
      {...rest}
    />
  );
}
