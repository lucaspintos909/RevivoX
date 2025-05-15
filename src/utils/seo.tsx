// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  ogType?: string;
  twitterHandle?: string;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImageUrl,
  ogType = "website"
}: SEOProps) {
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {/* WhatsApp */}
      <meta property="og:site_name" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Instagram (usa Open Graph) */}
      <meta property="instagram:card" content="summary_large_image" />
      <meta property="instagram:title" content={title} />
      <meta property="instagram:site" content={canonicalUrl} />
    </Head>
  );
}
