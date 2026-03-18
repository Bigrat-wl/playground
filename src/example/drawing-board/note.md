# Drawing Board

## 目录

- [.offset](#offset)
- [事件只绑定一次，不要随便嵌套](#事件只绑定一次不要随便嵌套)

## .offset

以“触发事件的元素本身”为基准，也就是元素内部的坐标

不要用 .client，他是相对于浏览器窗口的坐标

## 事件只绑定一次，不要随便嵌套

我开始的想法

```js
function draw(e) {...}

canvas.addEventListener('mousedown', e => {
  // 1. 按下时绑定
  canvas.addEventListener('mousemove', draw);
});

canvas.addEventListener('mouseup', () => {
  // 2. 松开时必须解绑！否则移动鼠标还在画
  canvas.removeEventListener('mousemove', draw);
});
```

在 JavaScript 中，addEventListener 的意思是“添加一个监听器”。当你按下一把鼠标（触发 mousedown）时，系统给画布绑定了一个 mousemove 监听器。

- 你画了第 1 笔：画布有 1 个 mousemove 在监听。

- 你画了第 2 笔：触发了第二次 mousedown，画布现在有 2 个 mousemove 在同时监听！

- 你画了第 100 笔：画布身上挂着 100 个 mousemove 监听器！

这意味着，当你画第 100 笔时，你鼠标哪怕只移动了 1 像素，浏览器都要同时执行 100 次 draw 函数！这种几何级数增长的计算量，会瞬间把浏览器的内存撑爆。

**解决方案：**
使用 `idDrawing` 记录状态，从而达到 draw 的目的
