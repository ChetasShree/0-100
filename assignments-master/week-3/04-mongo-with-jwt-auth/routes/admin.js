const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course, User} = require("../db");
const {JWT_SECERT} = require("../config");
const jwt = require("jsonwebtoken")

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password : password
    })
    res.json({
        message: 'Admin created successfully' 
    })
});


router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username,
        password
    });
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECERT);
        res.json({
            token: token 
        })
    }else{
        res.status(411).json({
            message: 'Incorrect email and password'
        })
    }
    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        message: 'Course created successfully', courseId: "new course "+ newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});

module.exports = router;