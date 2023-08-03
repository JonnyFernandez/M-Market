const createCategory = require('../controllers/categoryCtrl/createCategory')


const postCategory = async(req,res)=>{
     try {
        
        const aux = await createCategory()

        
        res.status(201).json(aux)


     } catch (error) {
        res.status(400).json({error:error.message})
     }
}


module.exports = postCategory