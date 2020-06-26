import React from 'react'
import './Bio.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import pic from './pic.jpg'
import github from './github.png'
import linkedin from './linkedin.png'
import resume from './resume.jpg'

const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <div>
          <img src={pic} alt='profile' className='pic' />
          <br />
          <h2>LanChi Pham, Full-Stack Developer</h2>
        </div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >

          <div className='bio'>
          My goal is to become a junior developer and web designer who can create dynamic webpages that are responsive and interactive. I also enjoy styling and designing user interfaces. I am open to job opportunities as well as relocating to launch my coding career. Contact me if you'd like to know more!
          </div>
          <div className='info'>
            <p>
              <ins><strong>PHONE</strong></ins>
              <br />
            714-696-2676
            </p>
            <p>
              <ins><strong>EMAIL</strong></ins>
              <br /> 
            Lpham2525@gmail.com
            </p>
            <p>
              <img src={github} alt='github symbol' />
              <br />
              <a href='https://github.com/lpham2525' target='_blank' rel="noopener noreferrer">Github</a>
            </p>
            <img src={linkedin} alt='linkedin logo' />
            <br />
            <a href='https://www.linkedin.com/in/lanchi-pham/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            <p>
              <img src={resume} alt="capital letter R" />
              <br />
              <a href='https://drive.google.com/file/d/1JPn9p7DDy5I61cIDv9S1dr3HBxB-YYQq/view?usp=sharing' target='_blank' rel="noopener noreferrer">Résumé</a>
            </p>
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Bio
