import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const secret = process.env.SANITY_REVALIDATE_SECRET;

type WebhookBody = {
  slug?: { current?: string } | string;
};

export async function POST(request: Request) {
  if (!secret) {
    return NextResponse.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 }
    );
  }

  const url = new URL(request.url);
  const token = url.searchParams.get("secret");

  if (!token || token !== secret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let slug: string | undefined;

  try {
    const body = (await request.json()) as WebhookBody | undefined;
    if (typeof body?.slug === "string") {
      slug = body.slug;
    } else if (typeof body?.slug === "object") {
      slug = body.slug?.current;
    }
  } catch {
    // ignore JSON parse errors, will fall back to revalidating list only
  }

  revalidatePath("/blog");

  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    paths: slug ? [`/blog`, `/blog/${slug}`] : [`/blog`],
  });
}
