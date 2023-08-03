const { Prod, Category } = require('../../db')
const darkApi = require('../../utils/backUp')



const fakeApi = () => {
    return  darkApi()
     
}


const infoDB = async () => {
    return await Prod.findAll({
        include: [{
            model: Category,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }]
    })
}



const allProducts = async () => {
    let prod1 = await fakeApi()
    let prod2 = await infoDB()

    let aux = prod1.concat(prod2)
    
    return aux

};


const allProductsByName = async (name) => {
    let arr = []

    const allProct = await allProducts()
    const productFilter = allProct.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))

    for (let i = 0; i < productFilter.length && i < 15; i++) {
        arr.push(productFilter[i])
    }

    if (name) {
        return productFilter.length ? arr : null
    } else {
        return allProct

    }
}


module.exports = { allProducts, allProductsByName }