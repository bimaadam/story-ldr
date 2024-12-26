import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Metadata SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rayakan Anniversary ke-3 Bima Adam & Ririn Setiawati. Yuk, beri testimoni dan ucapan terbaik di sini!" />
        <meta name="author" content="Bima Adam" />

        {/* Open Graph Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Story LDR - Anniversary 3 Tahun" />
        <meta property="og:description" content="Rayakan perjalanan cinta Bima Adam & Ririn Setiawati. Klik untuk berpartisipasi!" />
        <meta property="og:image" content="https://ldrstories.bimaadamrin.my.id/static/og-image.jpg" />
        <meta property="og:url" content="https://ldrstories.bimaadamrin.my.id/" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Story LDR - Anniversary 3 Tahun" />
        <meta name="twitter:description" content="Testimoni cinta untuk Bima Adam & Ririn Setiawati di Anniversary ke-3 mereka!" />
        <meta name="twitter:image" content="https://ldrstories.bimaadamrin.my.id/static/og-image.jpg" />

        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
