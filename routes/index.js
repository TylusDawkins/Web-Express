const { Router } = require('express');
const controllers = require('../controllers')
const blogController = require('../controllers/blogcontroller')
const foodController = require('../controllers/foodcontroller')
const router = Router();

// Blog Routes
router.get('/', (req, res) => res.send("Connection Successful!"))
router.get('/blogposts', blogController.getAllBlogPosts)
router.post('/createpost', blogController.createBlogPost)
router.put('/updatepost/:id',blogController.updateBlogPost)
router.delete('/deletepost/:id', blogController.deleteBlogPost)

// Food Routes
router.get('/food', foodController.getAllFood)
router.post('/createfood', foodController.createFood)
router.put('/updatefood/:id',foodController.updateFood)
router.delete('/deletefood/:id', foodController.deleteFood)



module.exports = router;