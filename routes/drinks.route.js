const {Router} = require('express')
const router = Router()
const {drinksController} = require('../controllers/drinks.controller')

router.get('/drinks',drinksController.getDrinksList)
router.get('/drinks/in-stock',drinksController.drinkAvailability)
router.post('/drinks',drinksController.addDrink)
router.delete('/drinks/:id',drinksController.deleteDrink)
router.patch('/drinks/:id',drinksController.changeDrink )


module.exports = router

