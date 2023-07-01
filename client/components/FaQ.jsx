import React from 'react'
import Faq from 'react-faq-component'

export default function FaQ () {
  const data = {
    title: 'FAQ',
    rows: [
      {
        title: 'How does Petsitter work?',
        content: `You can search for a pet sitter in your area by entering your address or hometown in the search box. Filtering for the service and period you need will give you the best results.

        You can contact sitters via their profile for free to organize a meet & greet. You will find the “Contact” button on the profile of each pet sitter.
        
        We recommend you contact at least 2 to 3 pet sitters to find one that best suits you and your pet. Make sure to check their average response time.`
      },
      // {
      //   title: 'How can I find a pet sitter?',
      //   content:
      //           `Whether you are looking for a dog sitter, a cat sitter, or a sitter for your guinea pig, rabbit or goldfish, you have come to the right place. Here's how to find your sitter:

      //           1. Type your hometown or suburb in the search.
      //           2. Choose your service.
      //           3. Choose your start and end date (or estimated dates if you're not quite sure yet)
      //           4. Click on Find a sitter.
      //           5. Browse the profiles of pet sitters in your area and contact the one(s) you like using the contact button on their profiles in order to ask for a meeting in person.

      //           You can move the map by clicking on it and dragging it in any direction if you want to change the search area or widen it by zooming out.`
      // },
      // // {
      //   title: 'What service can I book through Petsitter and what do they include?',
      //   content: `Pet sitters on Petsitter can be booked for the following services:

      //   - Home dog boarding
      //   - Doggy daycare
      //   - Dog walking
      //   - Home visits
      //   - House Sitting

      //   You will find below some details on what is expected of both the pet sitter and the pet owner during each service. This is to be used as a guideline - you and the sitter are welcome to reach an agreement on alternative arrangements.`
      // },
      {
        title: 'Can I trust a Petsitter’s pet sitter?',
        content: `Everything on Petsitter depends on trust, which is why we take verification seriously.

        First of all, we use automatic verification methods, namely email confirmation, SMS verification, and Facebook verification. Listings of insufficient quality are removed from the site.
        
        You are free to ask to see their ID card if this gives you additional peace of mind.
        
        Once a pet sitter has looked after a pet, the pet owner can leave a review, which is an indication of the sitter’s quality as well.
        
        Even more important than verification is this: use common sense and meet the pet sitter in person before you book. The purpose of the Meet & Greet is for pets and people to get to know one another. Ask any questions that are on your mind during this meeting. If you are not sure whether you feel that the sitter is trustworthy, we recommend that you contact somebody else.
        
        Every day people have great experiences with Petsitter, but the most important thing is that you yourself feel good about the concept. This is why many people start with a test sitting for one day or one night.`
      },
      {
        title: 'What is Petsitter’s cancellation policy?',
        content: 'Please keep in mind that your refund depends on your pet sitter\'s cancellation policy. '
      },
      {
        title: 'As a pet owner, what happens to my booking in case of sudden government restriction due to the pandemic?',
        content: 'During the worldwide Coronavirus crisis, the Petsitter team is here to support you with any concerns over your upcoming pet sitting bookings. It may take us a little bit longer than usual to get back to you, due to a large number of inquiries - we hope you understand.'
      },
      {
        title: 'How can I delete my credit card details?',
        content: `It is not possible to delete your credit card details as they are not stored on our site.

        If your credit card has changed, you can simply enter your new card number next time you make a booking. `
      },
      {
        title: 'How do I get an invoice or receipt for my booking?',
        content: `Petsitter is a platform that connects pet owners with pet sitters. As we are not the ones who provide the pet sitting service, we are also not in the position to issue invoices.

        If you need proof of your booking, the best way is to print the confirmation email or the booking overview that you can find on your dashboard.`
      },
      {
        title: 'How does Petsitter protect my privacy?',
        content: `While we do need a few personal details about you, we do everything in our power to protect your privacy.

        We need your first and last name for identification, your mobile number in order to notify you about new messages and of course your payment details when you book a pet sitter. When you contact your sitter for a service that takes place at your home (such as dog walking or home visits), you will need to give the sitter a rough idea of where you live. Your postcode is sufficient.
        
        Other than that, the only bit of personal information that is visible to the pet sitters you contact is your first name. It is up to you whether you want to pass on your phone number or address to a pet sitter. `
      }
    ]
  }

  const config = {
    animate: true,
    tabFocus: true
  }

  return (
    <div className='faq-screen'>
      <Faq
        data={data}
        config={config}
      />
    </div>
  )
}
