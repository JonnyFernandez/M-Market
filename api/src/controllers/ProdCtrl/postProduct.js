const { Prod, Category } = require('../../db')


const createProduct = async ( brand, name, price, priceRegular, unit, description, image, score, discount, categoties) => {
        console.log(categoties);
    const aux = await Prod.create({ brand, name, price, priceRegular, unit, description, image, score, discount })

    const search = await Category.findAll({ where: { name: categoties } })

    if (search.length < 1) {
        return "Dieta no incluida"

    }
    await aux.addCategory(search)

    return "Product create"





}

module.exports = createProduct