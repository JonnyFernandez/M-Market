const {Category} = require('../db')

const data =[ "Almacen", "Perfumeria", "Comida", "pastas", "embutidos","Carnes","Bebidas","Limpieza","Lacteos", "Verduras", "Aperitivos","Panaderia" ,"higiene personal" 
]

const createCategory = async() => {

    data.forEach(item => {
        Category.findOrCreate({ where: { name: item } })
    });
     
}


module.exports = createCategory


