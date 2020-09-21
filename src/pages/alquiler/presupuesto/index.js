import { graphql, useStaticQuery } from 'gatsby';
import { navigate } from 'gatsby-link';
import React from 'react';
import { useForm } from "react-hook-form";
import {
  Box,
  Button, Flex, Input, Label,

  Select,
  Textarea
} from 'theme-ui';
import Alquiler from '../../alquiler';

function encode(data) {
  console.log(data)
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Inscricion = ({ location }) => {

  const { register, handleSubmit, watch, errors } = useForm();

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
      query SalasQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "salas-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `)

  const { edges: salas } = data.allMarkdownRemark;

  return (
    <Alquiler showImage={false}>
      <Box as='form'
        name="presupuestos"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        p={4}
      >
        <Flex>
          <Box mr={4} sx={{ flex: 1 }}>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" ref={register} name="form-name" value="presupuestos" />
            <input type="hidden" ref={register} name="action" value="/alquiler/presupuesto/thanks/" />
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
            <Label htmlFor='sala'>Sala</Label>
            <Select ref={register} name='sala' id='sala' mb={3} value={location.state && location.state.selected} defaultValue={'Elige una sala'}>

              {salas && salas.map(({ node: sala }) =>
                <option key={sala.id} value={sala.frontmatter.title}>{sala.frontmatter.title}</option>
              )}
            </Select>
            <Button className="button is-link" type="submit">Enviar</Button>
          </Box>

        </Flex>
      </Box>
    </Alquiler>

  )

}

export default Inscricion;