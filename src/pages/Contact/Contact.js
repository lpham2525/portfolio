import React from 'react'
import './contact.css'
import Container from '@material-ui/core/Container'
import github from './images/github.png'
import linked from './images/linked.png'
import resume from './images/resume.jpg'
import gmail from './images/gmail.jpg'
import phone from './images/phone.jpg'
import delivery from './images/delivery.jpg'

const Contact = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <img className='delivery' src={delivery} alt='mailman pictures' />
        <h1 className='header'>I'd love to hear from you! Let's connect!</h1>
        <div className='info'>
          <p>
            <img className='symbol' src={phone} alt='phone symbol' />
            <br />
              714-696-2676
          </p>
          <p>
            <img className='symbol' src={gmail} alt='gmail symbol' />
            <br />
            <a href='mailto:lpham2525@gmail.com? subject=subject text ' target='_blank' rel='noopener noreferrer' id='email-link'>
              Lpham2525@gmail.com
            </a>
          </p>
          <p>
            <img className='symbol' src={github} alt='github symbol' />
            <br />
            <a href='https://github.com/lpham2525' target='_blank' rel='noopener noreferrer'>Github</a>
          </p>
          <img className='symbol' src={linked} alt='linkedin logo' />
          <br />
          <a href='https://www.linkedin.com/in/lanchi-pham/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <p>
            <img className='symbol' src={resume} alt='capital letter R' />
            <br />
            <a href='https://docs.google.com/document/d/1_eTe9DgBEbg6MghlNdJ14XX2KabCraCMirG6O505fH8/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>Résumé</a>
          </p>
        </div>
      </Container>
    </>
  )
}

export default Contact
