var mongoose = require('mongoose');
var schema = require('./product_schema.js');

mongoose.connect('mongodb://localhost:27017/retail');

var Product = mongoose.model('Product', schema, 'products');

var product = new Product({
  name: 'iPhone',
  pictures: ['http://apple.com/iphone-img1.jpg'],
  price: {
    amount: 500.00,
    currency: 'GBP',
    category: 'Phones'
  }
});

product.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  Product.find({ name: 'iPhone'}, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }

    console.log(JSON.stringify(docs));
    process.exit(0);
  });
});

