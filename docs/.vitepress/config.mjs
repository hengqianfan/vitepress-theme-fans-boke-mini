import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wo shi docs",
  description: "A VitePress Site",
  base: '/vitepress-theme-fans-boke-mini/docs/', // 必须与仓库路径匹配
  outDir: '../dist/docs',  // 统一输出到根目录的 dist 文件夹
  vite: {
    build: {
      emptyOutDir: true    // 避免构建冲突
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
