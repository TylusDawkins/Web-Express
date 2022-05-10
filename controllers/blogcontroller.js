const BlogPost = require('../models/blogpost');


const getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find()
        return res.status(200).json({ blogPosts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blogPost = await blogPost.findById(id)
        if (blogPost) {
            return res.status(200).json({ blogPost });
        }
        return res.status(404).send('item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createBlogPost = async (req, res) => {
    try {
        const blogPost = await new BlogPost(req.body)
        await blogPost.save()
        return res.status(201).json({
            blogPost,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}
const updateBlogPost = async (req,res) =>{
    try{
        res.status(200).json(await BlogPost.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}


const deleteBlogPost = async (req,res) =>{
    try{
        res.status(200).json(await BlogPost.findByIdAndDelete(req.params.id))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllBlogPosts,
    getBlogById,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
}
