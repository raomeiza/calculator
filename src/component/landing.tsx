import { Box, Container } from '@mui/material'
import * as React from 'react'
import * as bg1 from '../demo-9-banner-bg.png'


// create a text carousel component
const TextCarousel = () => {
  const [index, setIndex] = React.useState(0)
  const texts = ['Hello', 'World', 'Welcome', 'To', 'React', 'Text', 'Carousel']

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return <>{texts[index]}</>
}

export default function Landing(props:{id:string}) {

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bg1.default})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '3rem',
        fontWeight: 'bold',
        fontFamily: 'monospace'

      }}
      //it should answer the #home link
      id={props.id} 
    >
      <Container maxWidth="md"
      sx={{
        // animate all the text children
        '& > *': {
          animation: 'text-animation 1s ease-in-out infinite alternate',
        },
      }}
      >
        <TextCarousel />
      </Container>
    </Box>
  )
}