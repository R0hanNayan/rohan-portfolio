import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-item'>
          <a href="https://www.linkedin.com/in/rohan-nayan"><img src="../assets/LinkedIn.png" alt="linkedIn" /></a>
        </div>
        <div className='contact-item'>
          <a href="https://github.com/R0hanNayan"><img src="../assets/GitHub.png" alt="Github" /></a>
        </div>
        <div className='contact-item'>
          <a href="mailto:rohannayan405@gmail.com"><img src="../assets/mail.png" alt="Github" /></a>
        </div>
    </div>
  )
}

export default Contact