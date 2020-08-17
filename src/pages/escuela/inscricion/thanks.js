import React from 'react'
import Escuela from '../../escuela'
import { Message, Heading } from 'theme-ui'

export default () => (
  <Escuela showImage={false}>
    <Heading>Gracias!</Heading>
    <Message bg={'muted'}>En breve te contestamos.</Message>
  </Escuela>
)
