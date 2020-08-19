import React from 'react'
import About from '../about'
import { Message, Heading } from 'theme-ui'

export default () => (
  <About showImage={false}>
    <Heading>Gracias!</Heading>
    <Message bg={'muted'}>En breve te contestamos.</Message>
  </About>
)
