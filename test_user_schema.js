var mongoose = require('mongoose');
var schema = require('./user_schema.js');
mongoose.connect('mongodb://localhost:27017/retail');

var User = mongoose.model('User', schema, 'users');

var user = new User({
  profile: {
    username: 'Jim Margetts',
    picture: 'http://jim.margetts@gmail.com'
  },
  data: {
    oauth: 'testoauth'
  }
});

user.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  User.find({}, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(JSON.stringify(docs));
    process.exit(0);
  });
});
