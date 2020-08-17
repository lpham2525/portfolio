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
          I have a certificate in Full Stack Web Development from the University of CA, Irvine, which heightened my skills in problem-solving, teamwork, and analysis as well as strengthening my resourcefulness and creativity.
            </p>
            <p>
              I look forward to contributing my skills to an organization that seeks to create compelling, intuitive, and visually magnetic websites and apps. Contact me if you'd like to know more!
            </p>
          </div>
          <div className='skills'>
            <h1>Technical Skills</h1>
            <img className='symbols' src={html} alt='HTML5 symbol' />
            <img className='symbols' src={css} alt='CSS symbol' />
            <img className='symbols' src={js} alt='JS symbol' />
            <img className='symbols' src={mysql} alt='MySQL symbol' />
            <img className='symbols' src={mongo} alt='MongoDB symbol' />
            <img className='symbols' src={react} alt='React JS symbol' />
            <img className='symbols' src={node} alt='Node JS symbol' />
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Bio
