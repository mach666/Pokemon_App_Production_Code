const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
const port = process.env.PORT||5000;
const pokemonProd=require('./services/pokemonProd')
app.use(express.json())
app.use(cors())

app.post('/pokemonProd',pokemonProd)
app.use(express.static(path.join(__dirname,'build')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
    
})

app.listen(port, () => {
  console.log('Server Is ON');
});
