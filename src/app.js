import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "Harry Potter"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node JS');
});

app.get('/livros', (req, res) =>{
    res.status(200).json(livros)
})

export default app;