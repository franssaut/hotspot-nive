const express = require('express')
const path = require('path')
const pegawai = require('./Member')
const app = express();





app.use(express.static('aset'));
app.get('/api/pegawai',(req,res)=>{
    res.json(pegawai);
})

app.get('/',(req,res)=>{
    res.sendfile(path.resolve(__dirname,'index.html'));
})

app.get('/status',(req,res)=>{
    res.sendfile(path.resolve(__dirname,'status.html'))
})

app.listen(3000,()=>{
    console.log('server ini berjalan di port 3000')
})

