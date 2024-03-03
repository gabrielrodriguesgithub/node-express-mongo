import http from "http";
import app from "./src/app.js";

const PORT = 3000;


app.listen(PORT, () => {
    console.log('o servidor esta ouvindo na porta 3000')
})


