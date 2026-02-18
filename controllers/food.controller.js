const Food = require("../models/food.model");


const getFoods = async (req, res) => {
    try{
        const foods = await Food.getAllFoods();
        res.json(foods);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
   
}

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

const editFood = async (req, res) => {
    try{
        await Food.updateFood(req.params.id, req.body);
        res.json({ message: "Food updated successfully" });
    }catch (err){
        res.status(500).jsone({ message: err.message });
    }
};

const removeFood = async (req, res) => {
    try{
        await Food.deleteFood(req.params.id, req.body);
        res.json({ message: "Food deleted successfully" });
    }catch (err){
        res.status(500).jsone({ message: err.message });
    }
};


module.exports = {
    getFoods,
    getFood,
    addFood,
    editFood,
    removeFood,
};