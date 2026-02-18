const db = require("../config/db");

const getAllFoods = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_food");
    return rows;
};

const getFoodById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM tbl_food WHERE id = ?",
        [id]
    );
    return rows[0];
};

const createFood = async (food) => {
    const { name, cuisine, difficulty } = food;
    const [result] = await db.query(
        "INSERT INTO tbl_food (name,cuisine,difficulty) VALUES (?, ?, ?)",
        [name,cuisine,difficulty]
    );
    return result;
};

const updateFood = async (id, { name, cuisine, difficulty }) => {
    const [result] = await db.query(
        "UPDATE tbl_food SET name = ?, cuisine = ?, difficulty = ?",
        [name, cuisine, difficulty, id]
    );
    return result;
};

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
    createFood,
    updateFood,
    deleteFood,
};