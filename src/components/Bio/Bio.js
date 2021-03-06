import React from 'react'
import './Bio.css'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import pic from './images/pic.jpg'
import bootstrap from './images/bootstrap.jpg'
import materialize from './images/materialize.jpg'
import matUI from './images/matUI.jpg'
import npm from './images/npm.jpg'
import node from './images/node.jpg'
import html from './images/html.jpg'
import css from './images/css.jpg'
import js from './images/js.jpg'
import jquery from './images/jquery.jpg'
import mysql from './images/mysql.jpg'
import mongo from './images/mongo.jpg'
import react from './images/react.jpg'

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
            <h2 className='lobster'>LanChi Pham, Front-End Developer</h2>
            <p>
              Hi, there! I'm LanChi, a front-end developer with a full-stack web development certificate from the University of CA, Irvine.
            </p>
            <p>
              My goal is to be a web developer who can create dynamic webpages that are as responsive and interactive as they are eye-popping and aesthetically bold.
            </p>
            <p>
            I look forward to contributing my skills to an organization that seeks to create compelling and intuitive websites. Check out my <a href='https://docs.google.com/document/d/1_eTe9DgBEbg6MghlNdJ14XX2KabCraCMirG6O505fH8/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>resume</a> or <Link to='/Contact'> contact </Link> me if you'd like to know more!
            </p>
          </div>
        </Grid>
      </Container>
      <div className='skills'>
        <h1 className='lobster techHead'>Technical Skills</h1>
        <img className='symbols' src={html} alt='HTML5 symbol' />
        <img className='symbols' src={css} alt='CSS symbol' />
        <img className='symbols' src={js} alt='JS symbol' />
        <img className='symbols' src={jquery} alt='jQuery symbol' />
        <img className='symbols' src={mysql} alt='MySQL symbol' />
        <img className='symbols' src={mongo} alt='MongoDB symbol' />
        <img className='symbols' src={react} alt='React JS symbol' />
        <img className='symbols' src={node} alt='Node JS symbol' />
        <img className='symbols' src={bootstrap} alt='bootstrap symbol' />
        <img className='symbols' src={materialize} alt='materialize symbol' />
        <img className='symbols' src={matUI} alt='material-UI symbol' />
        <img className='symbols' src={npm} alt='npm symbol' />
      </div>
    </>
  )
}

export default Bio
