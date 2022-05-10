const Food = require('../models/food');


const getAllFood = async (req, res) => {
    try {
        const food = await Food.find()
        return res.status(200).json({ food })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getFoodById = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findById(id)
        if (food) {
            return res.status(200).json({ food });
        }
        return res.status(404).send('item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createFood = async (req, res) => {
    try {
        const food = await new Food(req.body)
        await food.save()
        return res.status(201).json({
            food,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}
const updateFood = async (req,res) =>{
    try{
        res.status(200).json(await Food.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}


const deleteFood = async (req,res) =>{
    try{
        res.status(200).json(await Food.findByIdAndDelete(req.params.id))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllFood,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
}
