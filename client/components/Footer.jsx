import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  function handleSubmit () {
    alert('Thank you for your subscribing to our newsletter')
    event.preventDefault()
  }
  return (
    <>
      <section className="footer">
        <div className="footer-layout">
          <div className="">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="f-social fa-brands fa-instagram fa-xl"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="f-social fa-brands fa-facebook fa-xl"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="f-social fa-brands fa-youtube fa-xl"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <i className="f-social fa-brands fa-twitter fa-xl"></i>
            </a>
          </div>
          <div className="f-newsletter">
            Subscribe to our newsletter to get our latest news.
            <form className="f-inline" >
              <input type="email" name="email" placeholder="Enter email address" />
              <input className="f-suscribe-button primaryhover" type="submit" onClick={handleSubmit} value="Subscribe" />
            </form>

          </div>
        </div>
        <div>
          <ul className="f-links">
            <li><Link to='/' className='nav-link secondaryhover'>Home</Link></li>
            <li><Link to='/aboutus' className='nav-link secondaryhover'>About Us</Link></li>
            <li><Link to='/faq' className='nav-link secondaryhover'>FAQ</Link></li>
          </ul>
          <img className="f-logo" src="/images/logo_vector.svg" /></div>
        <p className="footer-copyright">Made by animal lovers 💗 in Auckland, New Zealand<br />
        Copyright © 2022 Petsitter Inc. All Rights Reserved. Terms and Conditions and Privacy & Cookie Policy.</p>

      </section>
    </>
  )
}

export default Footer
