const { Router } = require('express')

const categoryController = require('./controllers/categoryController')

const router = Router()

/**
 * GET /categories
 * @summary Responds with all categories in database
 * @route GET /categories
 * @tags Category
 * @returns {array<Category>} 200 - An array of category
 */
router.get("/categories", categoryController.getAll);

/**
 * A Category
 * @typedef {object} Category
 * @property {number} id.required - The category id
 * @property {string} name - The category name
 */

module.exports = router
