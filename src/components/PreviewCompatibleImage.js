import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { jsx, Image } from 'theme-ui'
const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { backgroundPosition: 'center' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Image style={imageStyle} sx={{ objectFit: "cover" }} src={image.childImageSharp.fluid.src} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Image style={imageStyle} sx={{ objectFit: "cover" }} src={childImageSharp.fluid.src} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} sx={{ objectFit: "cover" }} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
