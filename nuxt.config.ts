// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-graphql-client"
  ],
  runtimeConfig: {
    strapiHost: process.env.STRAPI_HOST,
    public: {
      'graphql-client': {
        codegen: {
          disableOnBuild: true
        },
        clients: {
          github: {
            host: process.env.GQL_GITHUB_HOST,
            token: process.env.GQL_GITHUB_TOKEN,
            headers: {
              "User-Agent": "portfolio-nuxt"
            },
            codegenHeaders: {
              "User-Agent": "portfolio-nuxt"
            }
          },
          strapi: {
            host: process.env.GQL_STRAPI_HOST,
            token: process.env.GQL_STRAPI_TOKEN,
          }
        }
      }
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: "light",
  },
  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/danishrashidin",
    },
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  hooks: {
    // shadcn/vue integration
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: 'My',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      })
    }
  },
  routeRules: {
    "/": {
      ssr: false,
      prerender: true
    },
    "/api/**": {
      cors: true
    }
  }
});