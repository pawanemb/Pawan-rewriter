import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Character Set */}
        <meta charSet="utf-8" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Blog Rewriter AI - Transform your content with advanced AI optimization" />
        <meta name="keywords" content="blog rewriter, AI content, SEO optimization, content improvement" />
        <meta name="author" content="Blog Rewriter AI" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogrewriter.ai/" />
        <meta property="og:title" content="Blog Rewriter AI" />
        <meta property="og:description" content="Transform your content with advanced AI optimization" />
        <meta property="og:image" content="https://blogrewriter.ai/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://blogrewriter.ai/" />
        <meta name="twitter:title" content="Blog Rewriter AI" />
        <meta name="twitter:description" content="Transform your content with advanced AI optimization" />
        <meta name="twitter:image" content="https://blogrewriter.ai/twitter-image.jpg" />
        
        {/* Mobile Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Blog Rewriter AI" />
        
        {/* PWA Tags */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        
        {/* Fonts Preload */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Third-party Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script 
              async 
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `
              }}
            />
          </>
        )}
      </Head>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}