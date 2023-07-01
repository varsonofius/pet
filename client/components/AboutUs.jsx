import React from 'react'

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <h1>About Us</h1>
      <div className="abou-us-comment">Petsitters is New Zealand's largest and most respected pet services site. <br></br>Our site simple to use and connects you with other pet loving people.</div>
      <div className ="aboutus-img">
        <img className="about-us-img" src='../images/aboutus.png' />
        <img className="about-us-img" src='../images/aboutus1.png' />
      </div>
      <div>
        <h3> Travel without a worry
        </h3>
        <p className="about-us-p"> With the launch of our site in 2022, we aim to create even more opportunities for pet owners and pet lovers to connect, allowing pet owners to travel without worrying about their furbaby.
        </p>
        <h3>The Founders
        </h3>
        <p className="about-us-p">Pet Sitters is owned by five friends who decided that we needed a local pet sitting service to connect pet lovers and pet owners with a focus on great support and continual improvement. Over the years we have facilitated tens of thousands of successful pet services, bringing pet lovers together from Northland to Invercargill and everywhere in between.
        </p>
        <h3>Genuine, practical &amp; friendly</h3>
        <p className="about-us-p">Just like our members, you'll find that Pet Sitters has a genuine, open-hearted spirit, which is reflected in the members we attract.<br></br>Thanks for taking the time to look around the site. Why not have a browse through the listings and start imagining where this could take you and your furbaby.<br></br>And when you've done all that, get involved! - It's easier than you think.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
