const Category = require("../models/Category")

module.exports = {
  async getAll(_, res) {
    try {
      const categories = await Category.findAll()
      if (!categories) {
        res.status(404).json("Categories not found")
      }
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

}