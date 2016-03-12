var mongoose = require('mongoose');
var schema = require('./user_schema.js');
mongoose.connect('mongodb://localhost:27017/retail');

var User = mongoose.model('User', schema, 'users');

var user = new User({
  name: 'Jim Margetts',
  email: 'jim.margetts@gmail.com'
});

user.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  User.find({ email: 'jim.margetts@gmail.com' }, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(JSON.stringify(docs));
    process.exit(0);
  });
});
