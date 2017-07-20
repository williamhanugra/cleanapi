var mysql = require('mysql');
var Sequelize = require('sequelize');

// function Connection() {
//   this.pool = null;

//   this.init = function() {
//     this.pool = mysql.createPool({
//       host: 'http://agrihack.party:32769/',
//       user: 'root',
//       password: 'sakura#2017',
//       database: 'sakura2017'
//     });
//   };

//   this.acquire = function(callback) {
//     this.pool.getConnection(function(err, connection) {
//       callback(err, connection);
//     });
//   };
// }

var sequelize = new Sequelize('sakuratest','root','sakura#2017', {
  host: 'agrihack.party',
  port: '32769',
  dialect: 'mysql',
  pool : {
    max: 5,
    min: 0,
    idle: 10000
  } 
});

sequelize.authenticate().then(() => {console.log('Connection has been established successfully.');})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports.sequelize = sequelize;
