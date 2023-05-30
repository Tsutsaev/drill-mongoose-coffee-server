const mongoose = require("mongoose");

const coffeeSchema = mongoose.Schema({
  drinkName: String,
  drinkCount: Number,
  drinkAvailability: Boolean,
  drinkContainCaffeine: Boolean,
  drinkVolume: String,
  drinkDescription: String,
});

const Drink = mongoose.model('Drink',coffeeSchema)

module.exports = Drink