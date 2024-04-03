const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/farmacia",{
    useNewUrlParser: true,
    useUnifieldTopology: true
});
const Medicamento = mongoose.model("Medicamento",{
    nome:String,
    quantidade:Number
});

app.use(bodyParser.json());
app.get("/api/estoque",async (req,res) =>{
    try{
        const medicamentos = await Medicamento.find();
        res.json(medicamentos);
    }
    catch(error){
        res.status(500).json({error:"Erro ao adicionar medicamento ao estoque"})
    }
});

app.listen(PORT,() =>{
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});