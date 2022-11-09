import express from "express";
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('😍 Hola Beatifull Family los amo 😘')
})

app.listen(8000,()=>{
    console.log('Servidor Corriendo en http://localhost:8000/')
})