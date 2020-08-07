/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = (props) =>
    <main
        sx={{
            flex: '1 1 auto',
            variant: 'layout.main',
            minHeight: '500px'
        }}>
        <Container>
            {props.children}
        </Container>
    </main>
