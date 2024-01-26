const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}
const usersModel = require('../models/users.model');
const configuracionsModel = require('../models/configuracions.model');
const notificacionsModel = require ('../models/notificacions.model');
const productividadsModel = require ('../models/productividads.model');
const recordatoriosModel = require ('../models/recordatorios.model');
const tareasModel = require ('../models/tareas.model')

// Autenticar y sincronizar
sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })


const users = usersModel(sequelize, Sequelize);
const configuracions = configuracionsModel (sequelize, Sequelize);
const notificacions =notificacionsModel (sequelize, Sequelize);
const productividads = productividadsModel (sequelize, Sequelize);
const recordatorios = recordatoriosModel (sequelize, Sequelize);
const tareas = tareasModel (sequelize, Sequelize);


//Realaciones 

users.hasMany(notificacions);
notificacions.belongsTo(users);


users.hasMany(recordatorios);
recordatorios.belongsTo(users);

users.hasMany(tareas);
tareas.belongsTo(users);

users.hasMany(productividads);
productividads.belongsTo(users);

users.hasMany(configuracions);
configuracions.belongsTo(users);



// Exportar el objeto sequelize
module.exports = sequelize;