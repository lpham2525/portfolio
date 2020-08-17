import React from 'react'
import './Bio.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import pic from './pic.jpg'
import node from './node.jpg'
import html from './html.jpg'
import css from './css.jpg'
import js from './js.jpg'
import mysql from './mysql.jpg'
import mongo from './mongo.jpg'
import react from './react.jpg'

const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <div className='bio'>
            <img src={pic} alt='profile' className='pic' />
            <br />
            <h2>LanChi Pham, Full-Stack Developer</h2>
            <p>
          Hi there! I'm LanChi, a front-end web developer who enjoys building websites which are user-friendly and visually appealing.
            </p>
            <p>
          I recently earned a certificate in Full Stack Development from the University of California, Irvine, which heightened my skills in problem-solving, teamwork, and analysis as well as stretching and strengthening my resourcefulness and creativity.
            </p>
            <p>
        Before coding, I was a medical social worker for five years which taught me how to collaborate on an interdisciplinary team, refine performance with feedback, and understand what clients truly want and need. I look forward to contributing my skills to an organization that seeks to create compelling, intuitive, and visually magnetic websites and apps. Contact me if you'd like to know more!
            </p>
          </div>
          <div class='skills'>
            <h1>Technical Skills</h1>
            <img src={html} alt='HTML5 symbol' />
            <img src={css} alt='CSS symbol' />
            <img src={js} alt='JS symbol' />
            <img src={mysql} alt='MySQL symbol' />
            <img src={mongo} alt='MongoDB symbol' />
            <img src={react} alt='React JS symbol' />
            <img src={node} alt='Node JS symbol' />
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Bio
