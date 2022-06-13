import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function About() {
  return (
    <>
      <section className='mb-6'>
        <h3 className='font-bold dark:text-white text-black mb-5'>About this app</h3>
        <p className='dark:text-white text-black font-normal text-justify leading-5'>
          A todo web application allows users to create, edit, and delete their todo list. 
          This project also includes an Authentication with MongoDB 
          and a Theme switching function with Tailwind CSS. 
        </p>
      </section>
      <section className='mb-6'>
        <h3 className='font-bold dark:text-white text-black mb-5'>Stack</h3>
        <div className='flex items-end flex-wrap justify-center gap-8'>
          <div className='flex flex-col items-center'>
            <img src={require('../../images/react.png')} alt="react-icon" />
            <h4 className='mt-3 dark:text-white text-black'>React.js</h4>
          </div>
          <div className='flex flex-col items-center'>
            <img src={require('../../images/tailwind.png')} alt="tailwind-icon" />
            <h4 className='mt-3 dark:text-white text-black'>Tailwind</h4>
          </div>
          <div className='flex flex-col items-center'>
            <img src={require('../../images/node.png')} alt="mongo-icon" />
            <h4 className='mt-3 dark:text-white text-black'>Node.js</h4>
          </div>
          <div className='flex flex-col items-center'>
            <img src={require('../../images/express.png')} alt="mongo-icon" />
            <h4 className='mt-3 dark:text-white text-black'>Express</h4>
          </div>
          <div className='flex flex-col items-center'>
            <img src={require('../../images/jwt.png')} alt="mongo-icon" />
            <h4 className='mt-3 dark:text-white text-black'>JWT</h4>
          </div>
          <div className='flex flex-col items-center'>
            <img src={require('../../images/mysql.png')} alt="mongo-icon" />
            <h4 className='mt-3 dark:text-white text-black'>MySQL</h4>
          </div>
        </div>
      </section>
      <section className='mb-6'>
        <h3 className='font-bold dark:text-white text-black mb-5'>Contact</h3>
        <div className='flex flex-col gap-5'>
          <div>
            <a href='https://github.com/Dope21/react-todo-app' className='dark:text-white text-black flex gap-4 items-center'>
              <FontAwesomeIcon icon={ faGithub } className="dark:text-purple-main text-black text-2xl w-6" />
              GitHub Repository
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/thanasak-limsila-99a814225/' className='dark:text-white text-black flex gap-4 items-center'>
              <FontAwesomeIcon icon={ faLinkedin } className="dark:text-purple-main text-black text-2xl w-6" />
              LinkedIn
            </a>
          </div>
          <div>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=thanasaklimsila%40gmail.com&authuser=0' className='dark:text-white text-black flex gap-4 items-center'>
              <FontAwesomeIcon icon={ faEnvelope } className="dark:text-purple-main text-black text-2xl w-6" />
              Gmail
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About