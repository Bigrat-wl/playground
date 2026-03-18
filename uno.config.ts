// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(), // 属性化模式（把 class 写成属性，HTML 更干净）
    presetIcons({
      // 图标预设（按需加载的纯 CSS 图标，超级好用）
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
  // 你甚至可以在这里自定义一些全局的极简设计变量
  theme: {
    colors: {
      primary: '#1a1a1a',
    },
  },

  shortcuts: {
    // 核心卡片容器
    'item-card': `
      flex items-center gap-4 p-4 rounded-xl 
      bg-gray-50/50 border border-gray-200 
      hover:bg-white hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5
      dark:bg-white/3 dark:border-white/5 
      dark:hover:bg-white/5 dark:hover:border-teal-500/50
      transition-all duration-300 no-underline
    `,
    // 文字颜色预设
    'text-main': 'text-gray-700 dark:text-gray-200',
    'text-sub': 'text-gray-400 dark:text-gray-500',
  },
  // content: {
  //   pipeline: {
  //     include: [
  //       /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
  //       '*.html',
  //       'src/**/*.html',
  //     ],

  //     exclude: [
  //       'node_modules',
  //       'dist',
  //       '.git',
  //       '.vscode',
  //       'public',
  //       'src/example/videoElement',
  //     ],
  //   },
  // },
});
