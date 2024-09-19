import { GoogleGenerativeAI } from "@google/generative-ai";

// Instanciando o gemini com a tua API KEY
const genAI = new GoogleGenerativeAI("AIzaSyA7C0fHyV6cdVmD6ynaCCNgl7PvOPmKcUM");

// Selecionando o modelo a ser utilizado
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Me explique a fórmula de baskhara";

// resultado da requisição ao gemini
const result = await model.generateContent(prompt);
console.log(result.response.text());