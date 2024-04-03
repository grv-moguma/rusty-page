import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "project",
  description: "A VitePress Site",
  base: '/<samplevite>/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'sidebar',
        items: [
          { text: 'vitepressでサイトを作る', link: '/setting/index' },
          { text: 'vitepressを githubpagesに公開する', link: '/upload/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

