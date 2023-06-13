const router = require("express").Router();
const upload = require("../utils/multer");
const { createUser,loginUser,getUsers,updateUser,deleteUser,forgetPassword,passwordReset,saveVerifiedEmail,searchUser } = require("../controller/UserController")
const auth=require("../middleware/authMiddleware")
const{createUser11,createBlog} =require("../controller/BlogController")

// @route     /api/user
// @desc       creating user
// access     public
router.post("/",upload.single("img"), createUser)

// router.post("/blog",upload.array("pictures"),createBlog)

// @route     /api/user/login
// @desc      getting login user token for auth 
// access     public
router.post("/login",loginUser);

// @route     /api/user/getAllUser
// @desc      geting loged in user profile data  
// access     private
router.get("/getAllUser",getUsers);

// @route     /api/user/:id
// @desc      updating user profile 
// access     private
router.put("/:id",updateUser);

// @route     /api/user/delete/:id
// @desc      updating user profile 
// access     private
router.delete("/delete/:id",deleteUser);



module.exports = router;