exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          name: 'kelmarna',
          email: 'kelmarna@email.nz',
          location: 'Howick',
          description: 'the awesome developer'
        },
        {
          id: 2,
          auth0_id: 'auth0|61414f84d35ac900717bc285',
          name: 'cattttttttt',
          email: 'cheeeessssseeeeee@email.nz',
          location: 'Panmure',
          description: 'the awesome developereeeeessssssssssseeeeee'
        },
        {
          id: 3,
          auth0_id: 'auth0|61414f84d35ac900717bc283',
          name: 'Jinny',
          email: 'cheeeesssssasdfsdfasdfasdfasdeeeeee@email.nz',
          location: 'Mt.Wellington',
          description: 'the awesome developereeeeessssssssssasdfasdfseeeeee'
        }
      ])
    })
}
