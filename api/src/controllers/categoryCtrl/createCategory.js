const data = require('../../utils/data')
const {Category} = require('../../db')



const createCategory = async() => {

    data.forEach(item => {
        Category.findOrCreate({ where: { name: item } })
    });
     
}

module.exports = createCategory