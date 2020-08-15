import React from 'react'
import Alquiler from '../..'
import SalasRoll from '../../../../components/SalasRoll'
import { Flex, Box } from 'theme-ui'

const SalasIndexPage = () =>
    <Alquiler showImage={false}>
        <Flex>

            <SalasRoll />

        </Flex>
    </Alquiler>

export default SalasIndexPage;