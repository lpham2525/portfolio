import React from 'react'
import Container from '@material-ui/core/Container'
import github from './github.png'
import linked from './linked.png'
import resume from './resume.jpg'

const Contact = () => {
  return (
    <>
      <Container maxWidth='sm'>
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
          <a href='https://drive.google.com/file/d/16xoE3nrZytlFOK936A7f_VrD2Cga4IOU/view?usp=sharing' target='_blank' rel="noopener noreferrer">Résumé</a>
        </p>
      </div>
      </Container>
    </>
  )
}

export default Contact
