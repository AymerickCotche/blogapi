const db = require('../dbClient')

class Category {

    constructor(obj={}) {
        for (const prop in obj) {
            this[prop] = obj[prop]
        }
    }

    static async findAll() {
        try {
            const { error, data} = await db.from('category').select()
            return data.map(row => new Category(row))
        } catch (error) {
            console.log(error)
            if (error.detail) {
                throw new Error(error.detail)
            }
            throw error
        }
    }

}

module.exports = Category