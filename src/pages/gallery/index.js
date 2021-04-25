/** @jsx jsx */
import { RiTeamLine } from 'react-icons/ri'
import { Container, jsx } from 'theme-ui'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import SubNavbar from '../../components/SubNavbar'
//import galleryHeader from "../../img/gallery.jpeg";

const Gallery = ({ children, showImage }) => {
    return (
        <Layout>
            <SubNavbar
                showImage={showImage}
                title={'Gallery'}
                link={'gallery'}
                icon={<RiTeamLine />}
            >
                <Link partiallyActive={true} to="/gallery/imagenes">
                    Imagenes
                </Link>
                <Link partiallyActive={true} to="/gallery/videos">
                    Videos
                </Link>
            </SubNavbar>
            <Container>{children}</Container>
        </Layout>
    )
}

export default Gallery
