// var express = require('express');
// var bodyparser = require('body-parser');
var sequelize = require('./connection').sequelize;
var Sequelize = require('sequelize');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('./socket/socket-io').listen(server);
// var port = process.env.PORT || 2016;

// server.listen(port, function () {
//   console.log('Server listening at port %d', port);
// });

const Status = sequelize.define('status_perangkat', {
  id_status: {
    type: Sequelize.INTEGER, 
    primaryKey: true
  }, 
  port_perangkat: Sequelize.INTEGER,
  id_user: Sequelize.INTEGER,
  status: Sequelize.INTEGER
}, {
  timestamps: false,
  freezeTableName: true
})

Status.findAll({where:{port_perangkat:31}},{raw: true}).then(stat => {
  console.log(JSON.parse(JSON.stringify(stat))[0]["id_status"])
})

// var perangkatRoutes = require('./routes/perangkat');
// var dataRoutes = require('./routes/data');
// var batteryRoutes = require('./routes/battery');
// var userRoutes = require('./routes/user');
// var tdlRoutes = require('./routes/tdl');
// var statusRoutes = require('./routes/status');
// var safeRoutes = require('./routes/safe');

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// app.use(express.static(__dirname + '/public'));
// app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// connection.init();

// // ROUTES
// perangkatRoutes.configure(app);
// dataRoutes.configure(app);
// batteryRoutes.configure(app);
// userRoutes.configure(app);
// tdlRoutes.configure(app);
// statusRoutes.configure(app);
// safeRoutes.configure(app);
