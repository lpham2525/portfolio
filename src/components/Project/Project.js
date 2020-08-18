// import React, { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import './Project.css'
// // import artist from './artist.png'
// // import gem from './gem.png'
// // import directory from './directory.png'
// // import weather from './weather.png'
// // import stats from './stats.png'
// // import budget from './budget.png'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     margin: 20,
//     padding: 20,
//     justifyContent: 'space-around',
//     alignContent: 'center',
//     backgroundColor: 'skyblue'
//   },
//   media: {
//     height: 340
//   }
// })

// const Project = props => {
//   const [repos, setRepos] = useState(
//     [{
//       id: 1,
//       name: 'Little Gems',
//       image: require('./gem.png'),
//       github: 'https://github.com/erikapaige/LittleGems/tree/LanChi',
//       app: 'https://erikapaige.github.io/LittleGems/',
//       summary: "An app which points users to restaurants which have high ratings but are overlooked because they have sparse reviews.Using Google Maps, the app pinpoints the user's location and then leverages the user's input or keyword(s) to locate local eateries with ratings of 4 stars or higher but with fewer than 100 reviews."
//     }, {
//       id: 2,
//       name: 'Artist A Day',
//       image: require('./artist.png'),
//       github: 'https://github.com/usrs/ArtistaDay',
//       app: 'https://hidden-inlet-64215.herokuapp.com/',
//       summary: "An app which provides consumers with a curated art shopping experience. Artists can upload their work and the app helps their art pieces stand out in the crowd. Each day features a new artist and the artist's work in a timed sale."
//     }, {
//       id: 3,
//       name: 'User directory',
//       image: require('./directory.png'),
//       github: 'https://github.com/lpham2525/directory',
//       app: 'https://lpham2525.github.io/directory/',
//       summary: "The User Directory app provides users a way to view non-sensitive data about the people in the directory. It allows users to sort the table by last name or job title as well as filter the directory by first or last name. The app is built with React and breaks up the application's UI into components, manages component state, and responds to user events."
//     }, {
//       id: 4,
//       name: 'Weather Dashboard',
//       image: require('./weather.png'),
//       github: 'https://github.com/lpham2525/weatherdashboard',
//       app: 'https://lpham2525.github.io/weatherdashboard/',
//       summary: 'An app where users can input the name of a city and receive weather information for that city. Information includes current temperature, humidity, wind speed, and UV index as well as a five-day forecast. Users can also save the city in their searches for convenient navigation and future use.'
//     }, {
//       id: 5,
//       name: 'Workout Tracker',
//       image: require('./stats.png'),
//       github: 'https://github.com/lpham2525/workout_tracker',
//       app: 'https://boiling-ocean-01580.herokuapp.com/',
//       summary: 'An app which allows users to view, create, and track daily workouts. It also enables users to track the name, type, weight, sets, reps, and duration of resistance exercises. If the exercise is a cardio exercise, the workout tracker keeps track of the distance traveled. Last, the app includes charts and graphs of the workouts to give users a visual depiction of their progress.'
//     }, {
//       id: 6,
//       name: 'Budget Tracker',
//       image: require('./budget.png'),
//       github: 'https://github.com/lpham2525/budget',
//       app: 'https://guarded-spire-68532.herokuapp.com/',
//       summary: 'An app in which users can add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, the budget tracker will populate the total with the adjusted transactions when brought back online.'
//     },
//     {
//       id: 7,
//       name: 'Google Books Search',
//       image: require('./google.png'),
//       github: 'https://github.com/lpham2525/googlebooks',
//       app: 'https://vast-ridge-81306.herokuapp.com/',
//       summary: "An app in which users can search for books using the GoogleBooks API. Users can also save the books to a Saved Page or click on a link to view the book's information. On the user's saved page will be the list of their saved books as well as the option to delete books."
//     }]
//   )
//   console.log('repos =', repos)
//   const classes = useStyles()
//   return (
//     <>
//       {repos.map(repo =>
//         <Card className={classes.root} key={repo.id}>
//           <CardActionArea>
//             <CardMedia
//               className={classes.media}
//               image={repo.image} alt='{repo.name}'
//             />
//             <CardContent>
//               <Typography gutterBottom variant='h5' component='h2'>
//                 {repo.name}
//               </Typography>
//               <Typography variant='body2' color='textSecondary' component='p'>
//                 {repo.summary}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size='small' color='primary' href={repos.github} target='_blank'>
//               GitHub Link
//             </Button>
//             <Button size='small' color='primary' href={repos.app} target='_blank'>
//               Deployed App
//             </Button>
//           </CardActions>
//         </Card>
//       )}
//     </>
//   )
// }

// export default Project

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Project.css'
import artist from './artist.png'
import gem from './gem.png'
import directory from './directory.png'
import weather from './weather.png'
import stats from './stats.png'
import react from './react.png'

// const repos = [{
//   id: 1,
//   name: 'Little Gems',
//   image: 'gem',
//   github: 'https://github.com/erikapaige/LittleGems/tree/LanChi',
//   app: 'https://erikapaige.github.io/LittleGems/',
//   summary: "An app which points users to restaurants which have high ratings but are overlooked because they have sparse reviews.Using Google Maps, the app pinpoints the user's location and then leverages the user's input or keyword(s) to locate local eateries with ratings of 4 stars or higher but with fewer than 100 reviews."
// }, {
//   id: 2,
//   name: 'Artist A Day',
//   image: 'artist',
//   github: 'https://github.com/usrs/ArtistaDay',
//   app: 'https://hidden-inlet-64215.herokuapp.com/',
//   summary: "An app which provides consumers with a curated art shopping experience. Artists can upload their work and the app helps their art pieces stand out in the crowd. Each day features a new artist and the artist's work in a timed sale."
// }, {
//   id: 3,
//   name: 'User directory',
//   image: 'directory',
//   github: 'https://github.com/lpham2525/directory',
//   app: 'https://lpham2525.github.io/directory/',
//   summary: "The User Directory app provides users a way to view non-sensitive data about the people in the directory. It allows users to sort the table by last name or job title as well as filter the directory by first or last name. The app is built with React and breaks up the application's UI into components, manages component state, and responds to user events."
// }, {
//   id: 4,
//   name: 'Weather Dashboard',
//   image: 'weather',
//   github: 'https://github.com/lpham2525/weatherdashboard',
//   app: 'https://lpham2525.github.io/weatherdashboard/',
//   summary: 'An app where users can input the name of a city and receive weather information for that city. Information includes current temperature, humidity, wind speed, and UV index as well as a five-day forecast. Users can also save the city in their searches for convenient navigation and future use.'
// }, {
//   id: 5,
//   name: 'Workout Tracker',
//   image: 'stats',
//   github: 'https://github.com/lpham2525/workout_tracker',
//   app: 'https://boiling-ocean-01580.herokuapp.com/',
//   summary: 'An app which allows users to view, create, and track daily workouts. It also enables users to track the name, type, weight, sets, reps, and duration of resistance exercises. If the exercise is a cardio exercise, the workout tracker keeps track of the distance traveled. Last, the app includes charts and graphs of the workouts to give users a visual depiction of their progress.'
// }, {
//   id: 6,
//   name: 'React-folio',
//   image: 'react',
//   github: 'https://github.com/JonahHouse/React-folio',
//   app: 'http://pacific-forest-54922.herokuapp.com/login',
//   summary: 'An app in which users can create their own portfolio using elements built entirely from React components. The app utilizes password authentication so users can register and sign in securely. They are then directed to a dashboard where they can build their portfolio and then click "publish" to finalize their work.'
// }]

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    padding: 20,
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'skyblue'
  },
  media: {
    height: 340
  }
})

const Project = repos => {
  console.log('repos props', repos)
  const classes = useStyles()
  return (
    //     {props.repos.map(repo =>
    //     <>
    //       <Card className={classes.root}>
    //         <CardActionArea>
    //           <CardMedia
    //             className={classes.media}
    //             image={repos.name} alt='{repos.name}'
    //           />
    //           <CardContent>
    //             <Typography gutterBottom variant="h5" component="h2">
    //               {repos.name}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary" component="p">
    //               {repos.summary}
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //         <CardActions>
    //           <Button size="small" color="primary" href='{repos.github}' target='_blank'>
    //             GitHub Link
    //           </Button>
    //           <Button size="small" color="primary" href='{repos.app}' target='_blank'>
    //             Deployed App
    //           </Button>
    //         </CardActions>
    //       </Card>
    //     </>
    //   )
    // }
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gem}
            alt='Little Gems screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Little Gems
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app which points users to restaurants which have high ratings but are overlooked because they have sparse reviews.Using Google Maps, the app pinpoints the user's location and then leverages the user's input or keyword(s) to locate local eateries with ratings of 4 stars or higher but with fewer than 100 reviews.
              <br />
              <br />
              <strong>Technologies Used:</strong> HTML, Materialize, JS, GoogleMaps API, Zomato API
              <br />
              <br />
              <strong>Role: </strong>Collaborator(front-end)
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/erikapaige/LittleGems/tree/LanChi' target='_blank'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href='https://erikapaige.github.io/LittleGems/' target='_blank'>
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
              <br />
              <br />
              <strong>Technologies Used: </strong>
              <br />
              Node JS, Express, MongoDB, Mongoose
              <br />
              <br />
              <strong>Role: </strong>Sole contributor(back-end)
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/workout_tracker' target='_blank'>
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
            image={directory}
            alt='user directory screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              User Directory
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The User Directory app provides users a way to view non-sensitive data about the people in the directory. It allows users to sort the table by last name or job title as well as filter the directory by first or last name. The app is built with React and breaks up the application's UI into components, manages component state, and responds to user events.
              <br />
              <br />
              <strong>Technologies Used: </strong>
              <br />
              Bootstrap, React, Mockaroo
              <br />
              <br />
              <strong>Role: </strong>Sole contributor(front/back-end)
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/lpham2525/directory' target='_blank'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href="https://lpham2525.github.io/directory/" target='_blank'>
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
              An app where users can input the name of a city and receive weather information for that city. Information includes current temperature, humidity, wind speed, and UV index as well as a five-day forecast. Users can also save the city in their searches for convenient navigation and future use.
              <br />
              <br />
              <strong>Technologies Used: </strong>
              HTML, Bootstrap, JS, OpenWeatherMap API
              <br />
              <br />
              <strong>Role: </strong>Sole contributor(front/back-end)
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
            image={artist}
            alt='Artist A Day screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Artist A Day
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app which provides consumers with a curated art shopping experience. Artists can upload their work and the app helps their art pieces stand out in the crowd. Each day features a new artist and the artist's work in a timed sale.
              <br />
              <br />
              <strong>Technologies Used: </strong>HTML, JS, Node, MySQL, Materialize, imgur API
              <br />
              <br />
              <strong>Role: </strong>Collaborator(front/back-end)
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/usrs/ArtistaDay' target='_blank'>
            GitHub Link
          </Button>
          <Button size="small" color="primary" href='https://hidden-inlet-64215.herokuapp.com/' target='_blank'>
            Deployed App
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={react}
            alt='React-folio screenshot'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              React-folio
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app where users can create a portfolio with React components. Users can build a portfolio on the dashboard and click "publish" to see the final work.
              <br />
              <br />
              <strong>Technologies Used: </strong>
              React, MongoDB, Passport NPM, Material-UI
              <br />
              <br />
              <strong>Role: </strong>Collaborator(front/back-end)
              <br />
              <br />
              <strong>Guest account username & password:</strong> guestAccount
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
    </>
  )
}

export default Project
