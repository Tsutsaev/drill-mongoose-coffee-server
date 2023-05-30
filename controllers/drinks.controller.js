const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getDrinksList: async (req, res) => {
    const drinks = await Drink.find();
    res.json(drinks);
  },
  drinkAvailability: async (req, res) => {
    try {
      const drinkAvailability = await Drink.find({ drinkAvailability: true });
      res.json(drinkAvailability);
    } catch (err) {
      return res.json(err);
    }
  },
  getDrinkById: async (req, res) => {
    try {
      const drink = await Drink.findById(req.params.id);
      res.json(drink);
    } catch (err) {
      return res.json(err);
    }
  },
  addDrink: async (req, res) => {
    try {
      const addDrink = await Drink.create({
        drinkName: req.body.drinkName,
        drinkCount: req.body.drinkCount,
        drinkAvailability: req.body.drinkAvailability,
        drinkContainCaffeine: req.body.drinkContainCaffeine,
        drinkVolume: req.body.drinkVolume,
        drinkDescription: req.body.drinkDescription
      });
      res.json(addDrink)
    } catch (err) {
      return res.json(err);
    }
  },
  deleteDrink: async (req,res) => {
    try {
        const deleteDrink = await Drink.findByIdAndDelete(req.params.id)
        res.json(deleteDrink)
    } catch (err) {
        return res.json(err)
    }
  },
  changeDrink:async (req, res) => {
   try {
    const changeDrink = await Drink.findByIdAndUpdate(req.params.id,{
        drinkDescription: req.body.drinkDescription
    })
    res.json(changeDrink)
   } catch(err) {
    return res.json(err)
   }
  }
};
