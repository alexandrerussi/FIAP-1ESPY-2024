import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { GoogleGenerativeAI } from "@google/generative-ai";

// CONFIGURAR O ENDPOINT

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {

    const { messages } = req.body;
    console.log(messages[0].parts[0].text);

    // Instanciando o gemini com a tua API KEY
    const genAI = new GoogleGenerativeAI("AIzaSyA7C0fHyV6cdVmD6ynaCCNgl7PvOPmKcUM");

    // Selecionando o modelo a ser utilizado
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = messages[0].parts[0].text;

    // resultado da requisição ao gemini
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    res.json({
        chat_completion: result.response.text()
    })

});

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`);
});