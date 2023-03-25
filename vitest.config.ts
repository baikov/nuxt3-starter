import { defineVitestConfig } from 'nuxt-vitest/config'

// export default defineVitestConfig({
//   test: {
//     environment: 'nuxt',
//   },
// })
export default defineVitestConfig({
  define: {
    'process.test': 'true',
  },
})
