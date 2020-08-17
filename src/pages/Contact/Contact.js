import React from 'react'
import './contact.css'
import Container from '@material-ui/core/Container'
import github from './images/github.png'
import linked from './images/linked.png'
import resume from './images/resume.jpg'
import gmail from './images/gmail.png'
import mailbox from './images/mailbox.png'
import phone from './images/phone.png'

const Contact = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <img className="symbol" src={mailbox} alt="mailbox symbol" />
        <h1 className='header'>I'd love to hear from you! Let's connect!</h1>
        <div className='info'>
          <p>
            <img className="symbol" src={phone} alt='phone symbol' />
            <ins><strong>PHONE</strong></ins>
            <br />
              714-696-2676
          </p>
          <p>
            <img className="symbol" src={gmail} alt='gmail symbol' />
            <ins><strong>EMAIL</strong></ins>
            <br />
            <span className='email'>Lpham2525@gmail.com</span>
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
            <a href='https://drive.google.com/file/d/16xoE3nrZytlFOK936A7f_VrD2Cga4IOU/view?usp=sharing' target='_blank' rel="noopener noreferrer">Résumé</a>
          </p>
        </div>
      </Container>
    </>
  )
}

export default Contact
