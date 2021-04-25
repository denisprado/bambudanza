import React, { useState, useEffect } from 'react'

const Width = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = (e) => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])

    return <div style={{ textAlign: 'center' }}>Width: {windowWidth / 16}</div>
}

export default Width
