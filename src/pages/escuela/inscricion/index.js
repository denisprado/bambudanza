import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby-link'
import React, { useState } from 'react'
import {
  Box, Flex, Input, Label,
  Button,
  Select,
  Textarea
} from 'theme-ui'
import { useForm } from "react-hook-form";
import Escuela from '../../escuela'

function encode(data) {
  console.log(data)
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Inscricion = ({ location }) => {

  const { register, handleSubmit, watch, errors } = useForm();


  const [isValidated, setIsValidated] = useState(false)
  const [formData, setFormData] = useState([])


  const onSubmit = (e) => {

    console.log("FormData: ", e)
    const form = e
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        ...e,
      }),
    })
      .then(() => navigate(e.action))
      .catch((error) => alert(error))
  }

  const data = useStaticQuery(graphql`
      query ProgramasQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___tipo] }
          filter: { frontmatter: { templateKey: { eq: "programa-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                horarios
                dias
                templateKey
              }
            }
          }
        }
      }
    `)

  const { edges: programas } = data.allMarkdownRemark;

  return (
    <Escuela showImage={false}>
      <Box as='form'
        name="inscriciones"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex>
          <Box mr={2} sx={{ flex: 1 }}>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" ref={register} name="form-name" value="inscriciones" />
            <input type="hidden" ref={register} name="action" value="/escuela/inscricion/thanks/" />
            <div hidden>
              <Label>
                Don’t fill this out:{' '}
                <input name="bot-field" ref={register} />
              </Label>
            </div>

            <Label htmlFor={'name'}>Nombre</Label>
            <Input
              type={'text'}
              name={'name'}
              ref={register}
              id={'name'}
              required={true}
            />

            <Label htmlFor={'email'}>Email</Label>
            <Input
              type={'email'}
              name={'email'}
              ref={register}
              id={'email'}
              required={true}
            />

            <Label htmlFor={'message'}>Mesage</Label>
            <Textarea
              name={'message'}
              ref={register}
              id={'message'}
              required={true}
            />

          </Box>
          <Box sx={{ flex: 1 }}>
            <Label htmlFor='programa'>Programa</Label>
            <Select ref={register} name='programa' id='programa' mb={3} value={location.state && location.state.selected}>
              {programas && programas.map(({ node: programa }) =>
                <option key={programa.id} value={programa.id}>{programa.frontmatter.title} - {programa.frontmatter.dias} - {programa.frontmatter.horarios}</option>
              )}
            </Select>
            <Button className="button is-link" type="submit">Enviar</Button>
          </Box>

        </Flex>
      </Box>

    </Escuela >

  )

}

export default Inscricion;