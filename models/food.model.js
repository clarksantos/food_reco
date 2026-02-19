const db = require("../config/db");

// GET ALL FOODS
const getAllFoods = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_food");
    return rows;
};

// GET FOOD BY THEIR ID
const getFoodById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM tbl_food WHERE id = ?",
        [id]
    );
    return rows[0];
};

// GET FOOD BY CUISINE
const getFoodsByCuisine = async (cuisine) => {
   const [rows] = await db.query(
        "SELECT * FROM tbl_food WHERE cuisine = ?",
        [cuisine]
    );
    return rows;
};

// GET FOOD BY DIFFICULTY
const getFoodsByDifficulty = async (difficulty) => {
   const [rows] = await db.query(
        "SELECT * FROM tbl_food WHERE difficulty = ?",
        [difficulty]
    );
    return rows;
};

// GET FOOD BY INGREDIENTS
const getFoodsByIngredients = async (ingredients) => {
   const [rows] = await db.query(
        "SELECT * FROM tbl_food WHERE ingredients LIKE ?",
        [`%${ingredients}%`]
    );
    return rows;
};

// ADD FOOD
const createFood = async (food) => {
    const { name, cuisine, difficulty, ingredients } = food;
    const [result] = await db.query(
        "INSERT INTO tbl_food (name,cuisine,difficulty,ingredients) VALUES (?, ?, ?, ?)",
        [name,cuisine,difficulty,ingredients]
    );
    return result;
};

// EDIT FOOD
const updateFood = async (id, { name, cuisine, difficulty, ingredients }) => {
    const [result] = await db.query(
        "UPDATE tbl_food SET name = ?, cuisine = ?, difficulty = ?, ingredients = ? WHERE id = ?",
        [name, cuisine, difficulty, ingredients, id]
    );
    return result;
};

// DELETE FOOD
const deleteFood = async (id) => {
    const [result] = await db.query(
        "DELETE FROM tbl_food WHERE id = ?",
        [id]
    );
    return result;
};

module.exports = {
    getAllFoods,
    getFoodById,
    getFoodsByCuisine,
    getFoodsByDifficulty,
    getFoodsByIngredients,
    createFood,
    updateFood,
    deleteFood,
};