import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Card.css'
import artist from './artistaday.png'
import gem from './gem.png'
import tempEng from './tempEng.png'
import weather from './weather.png'

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

const Portfolio = () => {
  const classes = useStyles()
  return (
    <>
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
          <Button size="small" color="primary">
            GitHub Link
          </Button>
          <Button size="small" color="primary">
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
          <Button size="small" color="primary">
            GitHub Link
          </Button>
          <Button size="small" color="primary">
            Deployed App
          </Button>
        </CardActions>
      </Card>
      <hr />
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
          <Button size="small" color="primary">
            Deployed App
          </Button>
        </CardActions>
      </Card>

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
              An app where users can input the name of a city and receive weather information for that city. Information includes current temperature, humidity, windspeed, and UV index as well as a five-day forecast. Users can also save the city in their searches for convenient navigation and future use.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/weatherdashboard' target='_blank'>
            GitHub Link
          </Button>
          <Button size="small" color="primary">
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
          <Button size="small" color="primary">
            GitHub Link
          </Button>
          <Button size="small" color="primary">
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
          <Button size="small" color="primary">
            GitHub Link
          </Button>
          <Button size="small" color="primary">
            Deployed App
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Portfolio
