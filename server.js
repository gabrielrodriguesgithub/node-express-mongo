import http from "http";

const PORT = 3000;

const opa = {
    "/": "Curso de Express API",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(opa[req.url]);
});

server.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}!`)
})