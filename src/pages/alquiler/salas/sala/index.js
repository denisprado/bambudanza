import React from 'react'
import Alquiler from '../..'
import SalasRoll from '../../../../components/SalasRoll'
import SidebarSalas from '../../../../components/SidebarSalasContent'
import DescriptionSalas from '../../../../components/DescriptionSalasContent'
import { Flex, Box } from 'theme-ui'

const SalasIndexPage = () =>
    <Alquiler showImage={false}>
        <Flex>
            <Box>Teste
                <SalasRoll />
                <DescriptionSalas />
            </Box>
            <SidebarSalas />
        </Flex>
    </Alquiler>

export default SalasIndexPage;