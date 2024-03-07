import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import livro from "../models/model.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao: " + erro)
})

conexao.once('open', () => {
    console.log('conexao feita ;)')
})

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node JS');
});

app.get('/livros', async (req, res) =>{
    const livros = await livro.find({})
    res.status(200).json(livros);
});

app.get('/livros/rocco', async (req, res) => {
    const editora = 'rocco'
    const listaLivros = await livro.find({editora});
    res.status(200).json(listaLivros);
});

app.put('/livros/:id', async (req, res) => {
    
});

app.post('/livros', async (req, res) => {
    const novoLivro = await livro.create(req.body)
    res.status(201).json("Livro criado com succeess!!" + novoLivro);
});

app.delete('/livros/:id', (req, res) => {
    const index = mostrarIndex(req.params.id);
    livros.splice(index, 1)
    res.status(200).send('livro deletado com sucesso!')
})

export default app;