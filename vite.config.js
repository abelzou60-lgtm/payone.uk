import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        addressProofCase: resolve(__dirname, 'address-proof-case.html'),
        applyVcc: resolve(__dirname, 'apply-vcc.html'),
        collect: resolve(__dirname, 'collect.html'),
        cryptopay: resolve(__dirname, 'cryptopay.html'),
        customPage: resolve(__dirname, 'custom-page.html'),
        eCnyGuide: resolve(__dirname, 'e-cny-guide.html'),
        liftAccountRestriction: resolve(__dirname, 'lift-account-restriction.html'),
        moneyFromChina: resolve(__dirname, 'money-from-China.html'),
        otherEvaluation: resolve(__dirname, 'other-evaluation.html'),
        pageCase: resolve(__dirname, 'page-case.html'),
        paymentsPure: resolve(__dirname, 'payments-pure.html'),
        payments: resolve(__dirname, 'payments.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        wiseDepositCase: resolve(__dirname, 'wise-deposit-case.html')
      }
    }
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'payone-logo.png'],
      manifest: {
        name: 'Payone UK',
        short_name: 'Payone',
        description: 'Payone UK - Payment Solutions',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'payone-logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'payone-logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 5000000, // 增加到 5MB
        navigateFallback: null, // 禁用默认的导航回退行为
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.+\.css$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'css-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /^https:\/\/.+\.js$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      }
    })
  ]
})