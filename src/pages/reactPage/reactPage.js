// import React from 'react'
// // import Reactfolio from '../../components/Reactfolio'
// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'

// const reactPage = () => {
//   return (
//     <>
//       <Grid
//         container
//         direction="row"
//         justify="space-evenly"
//         alignItems="center"
//         className="Project"
//       >
//         <h1>React-folio Group Project</h1>
//         <h2>Problem </h2>
//         <p>Creating a portfolio can be daunting and time-consuming, not to mention that layouts can be clunky and difficult to navigate. For those seeking to build sleek, clean, and professional portfolios, the React-folio is there to meet their needs. It features customizable features made entirely of React components, an easy-to-navigate dashboard page, and a way to publish their portfolio to showcase to others. </p>
//         <h3>Technologies Used</h3>
//         <p>React JS, MongoDB, Material UI styling library</p>
//         <h4>Role: Collaborator on front and back-end.</h4>
//         <p> Responsible for setting up user authentication using Passport npm package, wrote most of the back-end routes, and assisted in creating React components, both for building the app and for the user to select from in building a portfolio.</p>
//         <Button size="small" color="primary" href='https://github.com/JonahHouse/React-folio' target='_blank'>
//             GitHub Link
//         </Button>
//         <Button size="small" color="primary" href='http://pacific-forest-54922.herokuapp.com/login' target='_blank'>
//             Deployed App
//         </Button>
//       </Grid>
//     </>
//   )
// }

// export default reactPage

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const reactPage = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=''
          title='React-folio screenshot'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React-folio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Creating a portfolio can be daunting and time-consuming, not to mention that layouts can be clunky and difficult to navigate. For those seeking to build sleek, clean, and professional portfolios, the React-folio is there to meet their needs. It features customizable features made entirely of React components, an easy-to-navigate dashboard page, and a way to publish their portfolio to showcase to others.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='https://github.com/JonahHouse/React-folio' target='_blank'>
          GitHub Link
        </Button>
        <Button size="small" color="primary" href='http://pacific-forest-54922.herokuapp.com/login' target='_blank'>
          Deployed App
        </Button>
      </CardActions>
    </Card>
  )
}

export default reactPage
