module.exports = {
  // next/babel 必须添加，代表了next所需的所有presets
  // 因为此文件会覆盖next默认的babel配置
  // 如果不加next/babel，那么next内部编译所需的presets都得手动配置
  presets: ['next/babel'],
  plugins: [
    // antd 按需加载
    ['import', {
      libraryName: 'antd',
      // style: 'css' 样式按需加载与 mini-css-extract-plugin 有冲突，css 放到 _app.js 中全部加载
    }],
    // style in js
    ['styled-components', { ssr: true }],
  ]
}

console.log('>>>> custom bable config loaded.')
