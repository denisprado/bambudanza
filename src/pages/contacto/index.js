import { navigate } from 'gatsby-link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Flex, Input, Label, Textarea } from 'theme-ui'
import About from '../about'

function encode(data) {
    console.log(data)
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
}

const Contacto = () => {
    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = (e) => {
        console.log('FormData: ', e)
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

    return (
        <About showImage={false}>
            <Box
                as="form"
                name="contacto"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Flex>
                    <Box mr={2} sx={{ flex: 1 }}>
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input
                            type="hidden"
                            ref={register}
                            name="form-name"
                            value="contacto"
                        />
                        <input
                            type="hidden"
                            ref={register}
                            name="action"
                            value="/contacto/thanks/"
                        />
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

                        <Button my={4} type="submit">
                            Enviar
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </About>
    )
}

export default Contacto
