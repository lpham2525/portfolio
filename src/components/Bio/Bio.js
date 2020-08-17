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
import three from './three.jpg'

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
