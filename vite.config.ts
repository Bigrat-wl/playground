import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { readdirSync, statSync } from 'fs';
import Unocss from 'unocss/vite';

const htmlEntries = getHtmlEntries(resolve(__dirname, 'src'));

const injectFaviconPlugin = () => {
  return {
    name: 'html-inject-favicon',
    transformIndexHtml(html: string) {
      // 找到 </head> 标签，在它前面自动插入你的 svg favicon
      return html.replace(
        '</head>',
        `  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n</head>`,
      );
    },
  };
};

export default defineConfig({
  plugins: [Unocss(), injectFaviconPlugin()],
  build: {
    rollupOptions: {
      input: {
        // 这里的 key 是打包后的文件名，value 是 HTML 的实际路径
        main: resolve(__dirname, 'index.html'),
        example: resolve(__dirname, 'src/example/index.html'),
        unocss: resolve(__dirname, 'src/unocss/index.html'),
        ...htmlEntries,
      },
    },
  },
  server: {
    open: '/index.html',
  },
});

function getHtmlEntries(dir: string): Record<string, string> {
  const entries: Record<string, string> = {};
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = resolve(dir, file);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      const nestedEntries = getHtmlEntries(filePath);
      Object.assign(entries, nestedEntries);
    } else if (file === 'index.html') {
      const dirName = dirname(filePath).split('/').pop() || 'index';
      const key = dirName === 'src' ? 'main' : dirName;
      entries[key] = filePath;
    }
  }
  return entries;
}
