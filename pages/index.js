import dynamic from 'next/dynamic'
import styled from 'styled-components'
// import moment from 'moment' // 同步加载

const Title = styled.h1`
  color: #ff6f6c;
`
const Text = styled.h4({
  fontWeight: 700
})

const Dynamic = dynamic(import('../components/Dynamic'))

const HomePage = ({ name, time }) => (
  <>
    <Title>Hello World</Title>
    <Text>This is Text component</Text>
    <div>
      name: {name}
      <br/>
      time: {time}
      <br/>
      <Dynamic />
    </div>
  </>
)

HomePage.getInitialProps = async () => {
  const moment = await import('moment') // webpack 异步加载

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'caoxie',
        // time: moment(Date.now() - 60 * 1000).fromNow() // 同步 moment
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      })
    }, 1000)
  })
}

export default (HomePage)