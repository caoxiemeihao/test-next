import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import 'antd/dist/antd.css'

class MyApp extends App {
  static async getInitialProps({ Component }) {
    // 复写 App 组件的 getInitialProps 必须判断组件是否有getInitialProps
    // 不然组件中的getInitialProps不执行
    // next中的复写，要时刻注意还原原有的功能，就像配置 babel 那样
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    // Container是next必须的壳
    // Component即代表pages下的组件
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp