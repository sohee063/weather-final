const { data } = require("../repository/data");
const blogData = data;

const blogController = {
  findAll: (req, res) => {
    return res.status(200).json(blogData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const found = blogData.find((d) => d.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    } else {
      return res.status(404).send("Not Found");
    }
  },

  createOne: (req, res) => {
    const { title, content, author } = req.body;
    console.log(req.body, req.url);
    const id = parseInt(Math.random() * 10000);
    const newDiscussion = {
      id,
      title,
      content,
      author,
      createdAt: new Date().toISOString()
    };
    blogData.unshift(newDiscussion);
    return res.status(201).end();
  },

  updateById: (req, res) => {
    let { id } = req.params;
    let data = req.body;
    let index = blogData.findIndex((el) => el.id === Number(id));
    if (index !== -1) {
      blogData[index] = data;
      res.status(200).json(blogData);
    }
  },

  deleteById: (req, res) => {
    let index = blogData.findIndex((el) => el.id === Number(req.params.id));
    console.log("index", index);
    if (index !== -1) {
      blogData.splice(index, 1);
      res.status(200).json(blogData);
    }
  }
};

module.exports = {
  blogController
};
