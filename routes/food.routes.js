const express = require("express");
const router = express.Router();

const{
    getFoods,
    getFood,
    getCuisine,
    getDifficulty,
    getIngredients,
    addFood,
    editFood,
    removeFood,
} = require("../controllers/food.controller");


router.get("/",getFoods);
router.get("/:id",getFood);
router.get("/cuisine/:cuisine",getCuisine);
router.get("/difficulty/:difficulty",getDifficulty);
router.get("/ingredients/:ingredients",getIngredients);
router.post("/",addFood);
router.put("/:id",editFood);
router.delete("/:id",removeFood);
module.exports = router;        