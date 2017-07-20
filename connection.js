var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      host: 'http://agrihack.party:32769/',
      user: 'root',
      password: 'sakura#2017',
      database: 'sakura2017'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
