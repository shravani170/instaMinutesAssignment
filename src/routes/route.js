const express = require('express');
const eventController = require('../controllers/eventController')

const Midd = require('../middleware/authMiddleware')


const router = express.Router();

// router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
// });



router.post("/event", eventController.createEvent)
//router.post("/blogs",  Midd.middleWare, BlogController.createBlog)
router.get("/event/text",eventController.triggerEvent)
// router.put("/blogs/:blogId", Midd.middleWare,  BlogController.updateBlog)
// router.delete("/blogs/:blogId",  Midd.middleWare,  BlogController.deleteById)
// router.delete("/blogs",  Midd.middleWare, BlogController.deleteByQuery)   
// router.post("/login", AuthorController.login)   
module.exports = router;

