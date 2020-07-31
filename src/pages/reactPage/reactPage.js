import React from 'react'
import Reactfolio from '../../components/Reactfolio'
import Grid from '@material-ui/core/Grid'

const reactPage = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="Project"
      >
        <Reactfolio />
      </Grid>
    </>
  )
}

export default reactPage
