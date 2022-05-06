const BlogPost = require('../models/blogpost');
const { post } = require('../routes');


const getAllBlogPosts = async (req, res) => {
    try {
        const data = await BlogPosts.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await BlogPosts.findById(id)
        if (item) {
            return res.status(200).json({ post });
        }
        return res.status(404).send('item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createPost = async (req, res) => {
    try {
        const Post = await new BlogPosts(req.body)
        await item.save()
        return res.status(201).json({
            item,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}
const updateItem = async (req,res) =>{
    try{
        res.status(200).json(await Jewelry.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}


const deleteItem = async (req,res) =>{
    try{
        res.status(200).json(await Jewelry.findByIdAndDelete(req.params.id))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllBlogPosts,
    getBlogById,
    createItem,
    deleteItem,
    updateItem
}
