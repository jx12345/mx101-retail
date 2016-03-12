var mongoose = require('mongoose');
var schema = require('./category_schema.js');

mongoose.connect('mongodb://localhost:27017/retail');

var Category = mongoose.model('Category', schema, 'categories');

var category = new Category({
  _id: 'Android',
  parent: 'Phones',
  ancestors: ['Electronics, Phones, Android']
});

category.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  Category.find({ _id: 'Electronics' }, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(JSON.stringify(docs));
    process.exit(0);
  });
});



