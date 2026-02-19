const Food = require("../models/food.model");

// GET ALL FOODS
const getFoods = async (req, res) => {
    try{
        const foods = await Food.getAllFoods();
        res.json(foods);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
   
}

// GET FOOD ID
const getFood = async (req, res) => {
    try{
        const food = await Food.getFoodById(req.params.id);

        if(!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        
        res.json(food);
    }   catch (err) {
        res.status(500).json({ message: err.message });    }
};

// GET FOOD CUISINE
const getCuisine = async (req, res) => {
    try {
        const cuisine = req.params.cuisine;
        const food = await Food.getFoodsByCuisine(cuisine);
        
        if (!food) {
             return res.status(404).json({ message: "No foods found for this cuisine" });
        }

        res.json(food);
    }   catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET FOOD DIFFICULTY
const getDifficulty = async (req, res) => {
    try {
        const difficulty = req.params.difficulty;
        const food = await Food.getFoodsByDifficulty(difficulty);
        
        if (!food) {
             return res.status(404).json({ message: "No foods found for this difficulty" });
        }

        res.json(food);
    }   catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET FOOD INGREDIENTS
const getIngredients = async (req, res) => {
    try {
        const ingredients = req.params.ingredients;
        const food = await Food.getFoodsByIngredients(ingredients);
        
        if (!food) {
             return res.status(404).json({ message: "No foods found for this ingredients" });
        }

        res.json(food);
    }   catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ADD FOOD
const addFood = async (req, res) => {
    try{
        const result = await Food.createFood(req.body);
        res.status(201).json({
            id: result.insertId,
            ...req.body,
        });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// EDIT FOOD
const editFood = async (req, res) => {
    try{
        await Food.updateFood(req.params.id, req.body);
        res.json({ message: "Food updated successfully" });
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};

// DELETE FOOD
const removeFood = async (req, res) => {
    try{
        await Food.deleteFood(req.params.id, req.body);
        res.json({ message: "Food deleted successfully" });
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getFoods,
    getFood,
    getCuisine,
    getDifficulty,
    getIngredients,
    addFood,
    editFood,
    removeFood,
};