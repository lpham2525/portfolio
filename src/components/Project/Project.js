import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Project.css'
import artist from './artistaday.png'
import gem from './gem.png'
import tempEng from './tempEng.png'
import weather from './weather.png'
import stats from './stats.png'
import budget from './budget.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'skyblue'
  },
  media: {
    height: 340
  }
})

const Project = () => {
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gem} alt='Little Gems logo'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Little Gems App
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app which points users to restaurants which have high ratings but are overlooked because they have sparse reviews. Using Google Maps, the app pinpoints the user's location and then leverages the user's input or keyword(s) to locate local eateries with ratings of 4 stars or higher but with fewer than 100 reviews.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/erikapaige/LittleGems/tree/LanChi'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href ='#' target='_blank'>
            Deployed App
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={artist}
            alt='Artist A Day screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Artist A Day
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app which provides consumers with a curated art shopping experience. Artists can upload their work and the app helps their art pieces stand out in the crowd. Each day features a new artist and the artist's work in a timed sale.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/usrs/ArtistaDay'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href='https://hidden-inlet-64215.herokuapp.com/'>
            Deployed App
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={tempEng}
            alt='Template Engine screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Template Engine
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The app asks users a series of questions about each person on their engineering team in order to create an organized, readable roster. The team can be any combination of managers, engineers, and interns with a role-specific question for each member. Once all information has been collected from the user, the template engine will assemble an HTML page which exhibits information about each member on a formatted card.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/templateEngine' target='_blank'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href="https://lpham2525.github.io/templateEngine/" target='_blank'>
            Deployed App
          </Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={weather}
            alt='Weather Dashboard screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Weather Dashboard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app where users can input the name of a city and receive weather information for that city. Information includes current temperature, humidity, wind speed, and UV index as well as a five-day forecast. Users can also save the city in their searches for convenient navigation and future use.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/weatherdashboard' target='_blank'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href='https://lpham2525.github.io/weatherdashboard/' target='_blank'>
            Deployed App
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={stats}
            alt='Workout Tracker screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Workout Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app which allows users to view, create, and track daily workouts. It also enables users to track the name, type, weight, sets, reps, and duration of resistance exercises. If the exercise is a cardio exercise, the workout tracker keeps track of the distance traveled. Last, the app includes charts and graphs of the workouts to give users a visual depiction of their progress.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/workout_tracker'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href='https://boiling-ocean-01580.herokuapp.com/' target='_blank'>
            Deployed App
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={budget}
            alt='Budget Tracker screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Budget Tracker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app in which users can add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, the budget tracker will populate the total with the adjusted transactions when brought back online.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/budget'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href='https://guarded-spire-68532.herokuapp.com/' target='_blank'>
            Deployed App
          </Button>
        </CardActions>
      </Card>
      </Grid>
    </>
  )
}

export default Project
