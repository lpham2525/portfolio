import React from 'react'
import Button from '@material-ui/core/Button'

const Reactfolio = () => {
  return (
    <>
      <h1>React-folio Group Project</h1>
      <h2>Problem </h2>
      <p>Creating a portfolio can be daunting and time-consuming, not to mention that layouts can be clunky and difficult to navigate. For those seeking to build sleek, clean, and professional portfolios, the React-folio is there to meet their needs. It features customizable features made entirely of React components, an easy-to-navigate dashboard page, and a way to publish their portfolio to showcase to others. </p>
      <h3>Technologies Used</h3>
      <p>React JS, MongoDB, Material UI styling library</p>
      <h4>Role: Collaborator on front and back-end.</h4>
      <p> Responsible for setting up user authentication using Passport npm package, wrote most of the back-end routes, and assisted in creating React components, both for building the app and for the user to select from in building a portfolio.</p>
      <Button size="small" color="primary" href='https://github.com/JonahHouse/React-folio' target='_blank'>
      GitHub Link
      </Button>
      <Button size="small" color="primary" href='http://pacific-forest-54922.herokuapp.com/login' target='_blank'>
      Deployed App
      </Button>
    </>
  )
}

export default Reactfolio
