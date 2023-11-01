const express=require('express');
const { Socket } = require('socket.io');
const app=express();
const PORT=5000;

const http=require('http').createServer(app)
app.use(express.static('Public'));

http.listen(PORT ,()=>{
  console.log(`Listening on port ${PORT}`);
});

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
});

const io = require('socket.io')(http)
io.on('connection',(socket)=>{
  console.log('Chal gaya');
});