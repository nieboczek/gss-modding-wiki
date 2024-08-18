import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GSS Modding Wiki",
  description: "Documentation on how to mod Grocery Store Simulator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginner\'s Guide', link: '/beginners-guide/installing-mods' }
    ],

    sidebar: [
      {
        text: 'Beginner\'s Guide',
        items: [
          { text: 'Installing mods', link: '/beginners-guide/installing-mods' },
          { text: 'Configuring mods', link: '/beginners-guide/configuring-mods' }
        ]
      },
      {
        text: 'Developing mods',
        items: [
          { text: 'Work in progress' }
        ]
      },
      {
        text: "Miscellaneous",
        items: [
          { text: 'Hot reloading', link: '/misc/hot-reloading' },
          { text: 'Config types', link: '/misc/config-types' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nieboczek/gss-modding-wiki' },
      { icon: 'discord', link: 'https://discord.gg/5ENg4XGpPZ' }
    ]
  }
})
