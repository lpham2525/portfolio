import React from 'react'
import './Bio.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import pic from './pic.jpg'
import github from './github.png'
import linked from './linked.png'
import resume from './resume.jpg'
import node from './node.jpg'
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
            <img src={three} alt='HTML5, CSS, JS symbol' />
            <img src={mysql} alt='MySQL symbol' />
            <img src={mongo} alt='MongoDB symbol' />
            <img src={react} alt='React JS symbol' />
            <img src={node} alt='Node JS symbol' />
          </div>
          <br />
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
            <img src={linked} alt='linkedin logo' />
            <br />
            <a href='https://www.linkedin.com/in/lanchi-pham/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            <p>
              <img src={resume} alt="capital letter R" />
              <br />
              <a href='https://drive.google.com/file/d/16xoE3nrZytlFOK936A7f_VrD2Cga4IOU/view?usp=sharing' target='_blank' rel="noopener noreferrer">Résumé</a>
            </p>
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Bio
