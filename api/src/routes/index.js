const { Router } = require('express');
const routerProduct = require('./product.routes');
const category = require('./category.routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', routerProduct);
router.use('/category', category);

module.exports = router;
