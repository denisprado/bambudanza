import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby-link'
import React, { useState } from 'react'
import {
  Box, Flex, Input, Label,
  Button,
  Select,
  Textarea
} from 'theme-ui'
import Escuela from '../../escuela'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Inscricion = ({ location }) => {

  const [isValidated, setIsValidated] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
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
        name="contact"
        method="post"
        action="/escuela/inscricion/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}

      >
        <Flex>
          <Box mr={2} sx={{ flex: 1 }}>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="inscriciones" />
            <div hidden>
              <Label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </Label>
            </div>

            <Label htmlFor={'name'}>Nombre</Label>

            <Input
              type={'text'}
              name={'name'}
              onChange={handleChange}
              id={'name'}
              required={true}
            />


            <Label htmlFor={'email'}>
              Email
                  </Label>

            <Input
              type={'email'}
              name={'email'}
              onChange={handleChange}
              id={'email'}
              required={true}
            />

            <Label className="label" htmlFor={'message'}>Mesage</Label>

            <Textarea
              className="textarea"
              name={'message'}
              onChange={handleChange}
              id={'message'}
              required={true}
            />

          </Box>
          <Box sx={{ flex: 1 }}>
            <Label htmlFor='programa'>Programa</Label>
            <Select onChange={handleChange} name='programa' id='programa' mb={3} value={location.state && location.state.selected}>
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