import React from 'react'
import Project from '../../components/Project'
import Grid from '@material-ui/core/Grid'
import Scroll from '../../components/Scroll.js'

const Portfolio = () => {
  return (
    <>
      <h1>Welcome to the Portfolio Page!</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="Project"
      >
        <Project />
        <Scroll showBelow={250} />
      </Grid>
    </>
  )
}

export default Portfolio
