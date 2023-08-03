
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const createCategory = require('./src/controllers/categoryCtrl/createCategory.js')

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    createCategory()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
