const mongoose = require("mongoose");

const blogShema = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
  blogTitle: String,
  metaTitle: String,
  metaDesc: String,
  mainImageAlt: String,
  // blogMainImage: String,
  blogMainImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  detail: [
    {
      subTitle: String,
      //subImage: String,
      subImage: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
      imageAlt: String,
      subText: String,
    },
  ],
});

module.exports = mongoose.model("Blog", blogShema);
