import React from 'react'
import './Bio.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import pic from './pic.jpg'
import github from './github.png'
import linked from './linked.png'
import resume from './resume.jpg'
import html from './html.jpg'
import css from './css.jpg'
import js from './js.jpg'
import node from './node.jpg'
import mysql from './mysql.jpg'
import mongo from './mongo.jpg'
import react from './react.jpg'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

const Bio = () => {
  const classes = useStyles();
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
          <div id='skills'>
            <h3>Technical Skills</h3>
            <img src={html} alt='HTML5 symbol' />
            <img src={css} alt='CSS symbol' />
            <img src={js} alt='JavaScript symbol' />
            <img src={node} alt='Node JS symbol' />
            <img src={mysql} alt='MySQL symbol' />
            <img src={mongo} alt='MongoDB symbol' />
            <img src={react} alt='React JS symbol' />
          </div>
          <div id='other'>
            <h3>Other Skills</h3>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Interdisciplinary collaboration' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Analytical Skills"/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Problem-solving" />
              </ListItem>
            </List>
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
            <img src={linked} alt='linkedin logo' />
            <br />
            <a href='https://www.linkedin.com/in/lanchi-pham/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            <p>
              <img src={resume} alt="capital letter R" />
              <br />
              <a href='https://drive.google.com/file/d/1alIAJoWqCaqsxjWWOFLnxFG_np-UJCfs/view?usp=sharing' target='_blank' rel="noopener noreferrer">Résumé</a>
            </p>
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Bio
