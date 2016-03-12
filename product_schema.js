var mongoose = require('mongoose');
var Category = require('./category_schema.js');

var productSchema = {
  name: { type: String, required: true },
  // Pictures must start with "http://"
  pictures: [{ type: String, match: /^http:\/\//i }],
  price: {
    amount: { type: Number, required: true },
    currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      required: true
    }
  },
  category: Category.categorySchema
};

var schema = new mongoose.Schema(productSchema);

var currencySymbols = {
  'USD': '$',
  'EUR': 'E',
  'GBP': '£'
};

schema.virtual('displayPrice').get(function() {
  return currencySymbols[this.price.currency] + '' + this.price.amount;
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;


