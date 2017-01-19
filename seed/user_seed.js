var User = require('../models/user');

var hyena = require('hyena');
var connection = require('hyena/lib/mysql');

hyena.connect(connection({
  host: 'localhost',
  user: 'admin',
  password: 'fCQVi2agjzJNVvok',
  database: 'astro'
}));

var user = new User({
  id: 1,
  name: 'dries peeters',
  email: 'dries.peeters96@gmail.com',
  password: 'password'
});
user.save();

hyena.disconnect()
