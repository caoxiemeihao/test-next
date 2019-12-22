import { Button } from 'antd'
import styled from 'styled-components'

const Title = styled.h1`
  color: #ff6f6c;
`
const Text = styled.h4({
  fontWeight: 700
})

export default () => (
  <>
    <Title>Hello World</Title>
    <Text>This is Text component</Text>
  </>
)