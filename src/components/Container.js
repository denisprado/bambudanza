/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = (props) =>
    <main
        sx={{
            flex: '1 1 auto',
            variant: 'layout.main',
        }}>
        <Container>
            {props.children}
        </Container>
    </main>
