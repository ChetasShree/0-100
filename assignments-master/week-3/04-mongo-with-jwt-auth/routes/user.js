const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../../03-mongo/db");
const { JWT_SECERT } = require("../config");
const { Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
      username,
      password
    });
    res.json({
      message: "User created successfully",
    });
});

router.post('/signin', async(req, res) => {
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
        token:token
      })
    }else{
      res.status(411).json({
        message: 'Incorrect email and password'
      })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
      courses: response,
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
  const username = req.username;  // decoded se aa raha hai so
  try {
    User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  res.json({
    message: "Purchase complete",
  });
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
      username: req.username,
      password
    });
    const courses =  await Course.find({
      _id:{
        "$in":user.purchasedCourses
      }
    })
    res.json({
      courses: courses
    })
});

module.exports = router