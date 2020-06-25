import React from 'react'
import './Bio.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import pic from './pic.jpg'

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
            Phone: 714-696-2676
            </p>
            <p>
            Email: Lpham2525@gmail.com
            </p>
            <p>
              GitHub: <a href='https://github.com/lpham2525' target='_blank'>https://github.com/lpham2525</a>
            </p>
            <p>
              LinkedIn: <a href='https://www.linkedin.com/in/lanchi-pham/' target='_blank'>https://www.linkedin.com/in/lanchi-pham/</a>
            </p>
            <p>
              Resume: <a href='https://drive.google.com/file/d/1JPn9p7DDy5I61cIDv9S1dr3HBxB-YYQq/view?usp=sharing' target='_blank'>https://drive.google.com/file/d/1JPn9p7DDy5I61cIDv9S1dr3HBxB-YYQq/view?usp=sharing</a>
            </p>
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Bio
