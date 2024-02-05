// @ts-nocheck
import favicon from ".//extensions/favicon.png";
import auth from ".//extensions/logo-embrapa.png";
import MenuLogo from ".//extensions/logo.png"

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: auth,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['fr', 'de', 'pt-BR'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: '#ADD8E6	',//button select color
          primary200: '#ADD8E6',//background color
          primary500: '#ac73e6',
          primary600: '#191970',//text color barra esqueda
          primary700: '#191970',//border color
          danger700: '#b72b1a'
        },
      },

      // overwrite dark theme properties
      dark: {
        colors: {
          primary100: '#ADD8E6	',//button select color
          primary200: '#ADD8E6',//background color
          primary500: '#ac73e6',
          primary600: '#191970',//text color barra esqueda
          primary700: '#191970',//border color
          danger700: '#b72b1a'
        },
      }
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
