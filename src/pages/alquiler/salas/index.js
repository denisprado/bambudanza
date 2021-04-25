import React from 'react'
import Alquiler from '..'
import SalasRoll from '../../../components/SalasRoll'

const SalasIndexPage = () => (
    <Alquiler showImage={false} text={false}>
        <SalasRoll />
    </Alquiler>
)

export default SalasIndexPage
