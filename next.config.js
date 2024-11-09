/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode for development
    reactStrictMode: true,
  
    // Enable SWC minification
    swcMinify: true,
  
    // Disable x-powered-by header
    poweredByHeader: false,
  
    // Configure base path if app is not hosted at root
    // basePath: '',
  
    // Configure asset prefix for CDN
    // assetPrefix: 'https://cdn.yourdomain.com',
  
    // Configure the build directory
    distDir: '.next',
  
    // Configure build output
    output: 'standalone',
  
    // Enable compression
    compress: true,
  
    // Configure image domains and sizes
    images: {
      domains: [
        'localhost',
        'blogrewriter.ai',
        'images.unsplash.com'
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },
  
    // Environment variables available at build time
    env: {
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    },
  
    // Runtime configuration
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: process.env.MY_SECRET,
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  
    // Configure page extensions
    pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
  
    // Configure redirects
    async redirects() {
      return [
        {
          source: '/old-blog/:slug',
          destination: '/blog/:slug',
          permanent: true,
        },
        {
          source: '/about-us',
          destination: '/about',
          permanent: false,
        },
      ]
    },
  
    // Configure rewrites
    async rewrites() {
      return {
        beforeFiles: [
          // These rewrites are checked before pages/public files
          {
            source: '/feed.xml',
            destination: '/api/feed',
          },
        ],
        afterFiles: [
          // These rewrites are checked after pages/public files
          {
            source: '/api/:path*',
            destination: 'https://api.blogrewriter.ai/:path*',
          },
        ],
        fallback: [
          // These rewrites are checked after both beforeFiles and afterFiles
          {
            source: '/:path*',
            destination: '/_404',
          },
        ],
      }
    },
  
    // Configure headers
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()'
            }
          ]
        },
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
            { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
          ]
        }
      ]
    },
  
    // Configure webpack
    webpack: (config, { dev, isServer }) => {
      // Add webpack configurations
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
  
      // Add optimization for production builds
      if (!dev && !isServer) {
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
            },
          },
        }
      }
  
      return config
    },
  
    // Configure build ID
    generateBuildId: async () => {
      // You can, for example, get the latest git commit hash here
      return `build-${Date.now()}`
    },
  
    // Configure TypeScript
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      ignoreBuildErrors: process.env.NEXT_PUBLIC_APP_ENV === 'production',
    },
  
    // Configure ESLint
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: process.env.NEXT_PUBLIC_APP_ENV === 'production',
    },
  
    // Configure build indicators
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
    },
  
    // Experimental features
    experimental: {
      serverActions: true,
      serverComponents: true,
      appDir: false,
      optimizeCss: true,
      scrollRestoration: true,
    },
  
    // Configure onDemandEntries
    onDemandEntries: {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 2,
    },
  
    // Configure optimizations
    compiler: {
      // Remove console.logs in production
      removeConsole: process.env.NODE_ENV === 'production',
    },
  
    // i18n configuration
    i18n: {
      // These are all the locales you want to support
      locales: ['en', 'fr', 'de', 'es'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en',
      // This is a list of locale domains and the default locale they
      // should handle (these are only required when setting up domain routing)
      domains: [
        {
          domain: 'blogrewriter.com',
          defaultLocale: 'en',
        },
        {
          domain: 'blogrewriter.fr',
          defaultLocale: 'fr',
        },
      ],
    },
  }
  
  // Handle different configurations for development and production
  if (process.env.ANALYZE === 'true') {
    // Only add bundle analyzer in analyze mode
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    })
    module.exports = withBundleAnalyzer(nextConfig)
  } else {
    module.exports = nextConfig
  }