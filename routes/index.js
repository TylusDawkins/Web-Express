const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send("Connection Succesful!"))
router.get('/blogposts', controllers.getAllBlogPosts)
router.post('/createpost', controllers.createBlogPost)
router.put('/updatepost/:id',controllers.updateBlogPost)
router.delete('/deletepost/:id', controllers.deleteBlogPost)

module.exports = router;