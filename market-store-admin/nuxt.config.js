import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - Market Store Admin",
    title: "Market Store",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/utils.ts", "~/plugins/rules.ts"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org/
    "@nuxtjs/auth",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://192.168.0.5:51302", // Used as fallback if no runtime config is provided
    headers: { "Content-Type": "application/json" },
  },

  publicRuntimeConfig: {
    axios: {
      // browserBaseURL: "http://209.50.56.17:8080",
      browserBaseURL: "http://192.168.0.5:51302",
      headers: { "Content-Type": "application/json" },
    },
  },

  auth: {
    strategies: {
      redirect: {
        login: "/login",
        logout: "/login",
        callback: false,
        home: "/",
      },
      cookie: false,
      local: {
        endpoints: {
          login: {
            url: "/api/autenticacion/login",
            method: "post",
            propertyName: false,
          },
          user: {
            url: "/api/autenticacion/usuario",
            method: "get",
            propertyName: false,
          },
          logout: false,
        },
      },
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  router: {
    middleware: ["auth"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
