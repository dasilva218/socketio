import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { route } from './routes/index.js';

const Port = process.env.PORT || 5000;
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use('/', route);

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {})
});

server.listen(Port, () =>
  console.log(`serveur demarrer au port: ${Port}`)
);
