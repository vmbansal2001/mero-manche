import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { SanityImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold leading-tight text-zinc-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold leading-tight text-zinc-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-7 text-zinc-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 text-lg italic text-zinc-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 space-y-2 pl-6 text-base leading-7 text-zinc-700 marker:text-blue-500">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 space-y-2 pl-6 text-base leading-7 text-zinc-700 marker:text-blue-500">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc">{children}</li>,
    number: ({ children }) => <li className="list-decimal">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
        {value ? (
          <SanityImage
            image={value}
            alt={value.alt || "Blog image"}
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        ) : null}
        {value?.caption ? (
          <figcaption className="px-4 pb-4 pt-2 text-center text-sm text-zinc-500">
            {value.caption}
          </figcaption>
        ) : null}
      </figure>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="font-semibold text-blue-600 underline decoration-2 underline-offset-4 transition hover:text-blue-500"
        >
          {children}
        </a>
      );
    },
  },
};

type PortableTextRendererProps = {
  value: TypedObject | TypedObject[] | null | undefined;
};

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value) {
    return null;
  }
  return <PortableText value={value} components={components} />;
}
