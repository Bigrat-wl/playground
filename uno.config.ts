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
});
