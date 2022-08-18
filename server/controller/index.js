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
    console.log("ㅇㅇㅇㅇ", blogData);
    let index = blogData.findIndex((el) => el.id == req.params.id);
    const updated = {
      ...blogData[index],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    if (index !== -1) {
      blogData.splice(index, 1, updated);
      return res.status(200).json(blogData);
    } else {
      return res.status(404).send("Not found");
    }
  },

  deleteById: (req, res) => {
    let index = blogData.findIndex((el) => el.id === Number(req.params.id));
    if (index !== -1) {
      blogData.splice(index, 1);
      res.status(200).json(blogData);
    }
  }
};

module.exports = {
  blogController
};
