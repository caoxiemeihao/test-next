import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


class MyDocument extends Document {
  // @overWrite
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        // 强化 _app
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        // 强化 pages 下的组件
        // enhanceComponent: Component => Component,
      })

      const props = await Document.getInitialProps(ctx)

      return {
        ...props,
        // {props.styles} next 自带的 css in js
        // {sheet.getStyleElement()} styled-components 产生的 style
        styles: <>{props.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }

  }

  // 复写 Document 下面的结构也是必须的
  render() {
    return (
      <Html>
        <Head>
          {/* <style>{`body { font-size: 14px; color: #333; }`}</style> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
