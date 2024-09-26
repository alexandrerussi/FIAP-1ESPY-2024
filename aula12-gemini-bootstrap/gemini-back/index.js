import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// CONFIGURAR O ENDPOINT

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {

    const { messages } = req.body;
    console.log(messages[0].parts);

});

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`);
});