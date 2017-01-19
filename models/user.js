var hyena = require('hyena');
var connection = require('hyena/lib/mysql');
var Schema = hyena.Schema;

var userSchema = new Schema({
  id: { type: 'int', required: true },
  name: { type: 'string', required: true },
  email: { type: 'email', required: true },
  password: { type: 'string', required: true }
});

var User = hyena.model('User', userSchema);
