const Category = require('../models/category');


const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json({ categories })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id)
        if (category) {
            return res.status(200).json({ category });
        }
        return res.status(404).send('item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createCategory = async (req, res) => {
    try {
        const category = await new Category(req.body)
        await Category.save()
        return res.status(201).json({
            category,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}
const updateCategory = async (req,res) =>{
    try{
        res.status(200).json(await Category.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}


const deleteCategory = async (req,res) =>{
    try{
        res.status(200).json(await BlogPost.findByIdAndDelete(req.params.id))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}
