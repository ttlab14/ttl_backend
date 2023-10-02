const router = require("express").Router();
const upload = require("../utils/multer");

const auth = require("../middleware/authMiddleware");
const {
  createUser11,
  createBlog,
  getAllblogs,
  deleteBlog,
  updateBlog,
  getSingleBlog,
  getSingleBlogByTitle,
} = require("../controller/BlogController");

// @route     /api/blog
// @desc      creating blog
// access     private
router.post("/", upload.array("pictures"), createBlog);

// @route     /api/blog
// @desc      geting all blog
// access     private
router.get("/", getAllblogs);

// @route     /api/blog/:id
// @desc      get single blog
// access     private
router.get("/:id", getSingleBlog);

// @route     /api/blog/title/:id
// @desc      get single blog
// access     private
router.get("/title/:id", getSingleBlogByTitle);

// @route     /api/property/:id
// @desc      delete blog
// access     private
router.delete("/delete/:id", deleteBlog);

// @route     /api/property/:id
// @desc      edit blog
// access     private
router.put("/:id", upload.array("pictures"), updateBlog);

module.exports = router;
