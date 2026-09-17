const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bd_base_defecto', 'root', 'root', {
  host: 'base_datos_mysql',
  port: 3306,
  dialect: 'mysql' 
});

async function testConexion(){
    try {
     await sequelize.authenticate();
        console.log('CONEXION CORRECTAMENTE');
    } catch (error) {
  console.error('Error de conexion con la Base de Datos:', error);
    }
}
testConexion();

module.exports = sequelize;