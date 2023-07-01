exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('petsitters').del()
    .then(function () {
      // Inserts seed entries
      return knex('petsitters').insert([
        {
          id: 1,
          auth0_id: 'rowValue1',
          name: 'Claire',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'Cat',
          pet_size: 'Small',
          home_type: 'House',
          service_rate: 'Pet Sitting - $15 per hour',
          availability: 'All day weekends',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'Cat owner who is happy to look after other cats',
          img: '/images/profilephotos/Claire.jpeg'
        },

        {
          id: 2,
          auth0_id: 'rowValue1',
          name: 'Joanne',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'Dog',
          pet_size: 'Small to medium',
          home_type: 'House',
          service_rate: 'Pet Sitting - $15 per hour',
          availability: 'Thursday - Sunday from 5pm',
          description: 'I am a big fan of dogs and have lots of experience caring for other people’s fur babies! I have been trusted by a pug owner for the past few years looking after her dog Coco whenever she goes on holiday. I also help my neighbour look after his dog regularly by taking his dog out for walks, playing fetch and giving his dog cuddles when he requests it!Feel free to contact me about your petsitting needs. I will be happy to make my place feel like a home away from home for your dog!',
          promo_listing: 'Dog lover who does not own her own pets but love looking after other dogs. Has plenty of experience looking after other dogs.',
          img: '/images/profilephotos/Joanne.jpeg'
        },

        {
          id: 3,
          auth0_id: 'rowValue1',
          name: 'Jinny',
          location: 'Auckland',
          pet_number: 3,
          pet_type: 'Cat',
          pet_size: 'Small',
          home_type: 'Granny flat',
          service_rate: 'Pet Walking - $10 per hour',
          availability: 'Monday - Friday from 5pm',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'Cat lover who is always happy to help take care of others cats',
          img: '/images/profilephotos/Jinny.jpeg'
        },
        {
          id: 4,
          auth0_id: 'rowValue1',
          name: 'Hiro',
          location: 'Auckland',
          pet_number: 2,
          pet_type: 'Cat',
          pet_size: 'Small',
          home_type: 'Apartment',
          service_rate: 'Pet Walking - $10 per hour',
          availability: 'Weekends after 3pm',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'Big fan of all pets and has previous experience owning a dog and a cat',
          img: '/images/profilephotos/Hiro.jpeg'
        },
        {
          id: 5,
          auth0_id: 'rowValue1',
          name: 'Sadie',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'Dog',
          pet_size: 'Medium to large',
          home_type: 'House',
          service_rate: 'Pet Boarding - $40 per day',
          availability: 'Monday - Friday from 6pm',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'Love having a dog run around my big backyard. Hoping to own my own dog one day!',
          img: '/images/profilephotos/Sadie.jpeg'
        },
        {
          id: 6,
          auth0_id: 'rowValue1',
          name: 'Ahmad',
          location: 'Auckland',
          pet_number: 5,
          pet_type: 'Dog',
          pet_size: 'Medium to large',
          home_type: 'House',
          service_rate: 'Pet Grooming - discuss with pet sitter',
          availability: 'Weekends from 5am - 8pm',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'I love dogs!!! Woohoo!',
          img: '/images/profilephotos/Ahmad.jpeg'
        },
        {
          id: 7,
          auth0_id: 'rowValue1',
          name: 'Prue',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'Dog',
          pet_size: 'Small to medium',
          home_type: 'House',
          service_rate: 'Pet Walking - $10 per hour',
          availability: 'Weekdays between 6pm - 9pm',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'Dogs are sick! Yeah, they\'re mean.',
          img: '/images/profilephotos/Prue.jpeg'
        },
        {
          id: 8,
          auth0_id: 'rowValue1',
          name: 'Jared',
          location: 'Auckland',
          pet_number: 3,
          pet_type: 'Dog',
          pet_size: 'Small to medium',
          home_type: 'House',
          service_rate: 'Pet Boarding - $40 per day',
          availability: 'All day, everday',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'I only look after dogs named Jerry',
          img: '/images/profilephotos/Jared.jpeg'
        },
        {
          id: 9,
          auth0_id: 'rowValue1',
          name: 'Eleanor',
          location: 'Auckland',
          pet_number: 1,
          pet_type: 'Cat',
          pet_size: 'Any size',
          home_type: 'Flat',
          service_rate: 'Pet Sitting - $15 per hour',
          availability: 'Weekends from 3pm',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promo_listing: 'Love animals of all sizes. The bigger the better!',
          img: '/images/profilephotos/Eleanor.jpeg'
        }

      ])
    })
}
