const express = require("express");
const router = express.Router();

const{
    getFoods,
    getFood,
    addFood,
    editFood,
    removeFood,
} = require("../controllers/food.controller");


router.get("/",getFoods);
router.get("/:id",getFood);
router.post("/",addFood);
router.put("/:id",editFood);
router.delete("/:id",removeFood);
module.exports = router;