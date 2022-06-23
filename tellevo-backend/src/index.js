require('dotenv').config();

var chat = require('./middlewares/chat/chatserver');
var socketio = require('socket.io');
var http = require('http');

const app = require('./app');
const app_chat = require('./app');
const db = require('./models');
var debug = require('debug')('chat-server:server');

const PORT = process.env.PORT || 3000;
const PORT_CHAT = process.env.PORT_CHAT || 3001;

app_chat.set('port', PORT_CHAT);

var server = http.createServer(app_chat);
var io = socketio(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chat(io);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

server.listen(PORT_CHAT);
server.on('listening', onListening);

db.sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  }
  );
