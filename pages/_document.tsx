// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta name="description" content="Rayakan Anniversary ke-3 Bima Adam & Ririn Setiawati. Yuk, beri testimoni dan ucapan terbaik di sini!" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Story LDR - Anniversary 3 Tahun" />
        <meta property="og:description" content="Rayakan perjalanan cinta Bima Adam & Ririn Setiawati. Klik untuk berpartisipasi!" />
        <meta property="og:image" content="/static/og-image.jpg" /> {/* Ganti dengan gambar yang sesuai */}
        <meta property="og:url" content="https://ldrstories.bimaadamrin.my.id/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Story LDR - Anniversary 3 Tahun" />
        <meta name="twitter:description" content="Testimoni cinta untuk Bima Adam & Ririn Setiawati di Anniversary ke-3 mereka!" />
        <meta name="twitter:image" content="/static/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}