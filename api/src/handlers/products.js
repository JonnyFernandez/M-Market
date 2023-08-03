const { allProducts, allProductsByName } = require('../controllers/ProdCtrl/getAllProduct')
const createProduct = require('../controllers/ProdCtrl/postProduct')


const getProducts = async (req, res) => {
    try {
        const { name } = req.query;
        const response = name ? await allProductsByName(name) : await allProducts()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }


}
const postProducts = async (req, res) => {
    try {
        const { brand, name, price, priceRegular, unit, description, image, score, discount, categoties } = req.body;
        // console.log(categoties);
        const response = await createProduct( brand, name, price, priceRegular, unit, description, image, score, discount, categoties);
        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({ error: error.message });

    }

}
module.exports = {
    getProducts,
    postProducts,

}