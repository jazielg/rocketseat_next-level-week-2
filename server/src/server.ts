import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELELTE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro - request.body
// Route Params: Identificar qual recurso eu quero atualizar ou deletar - (localhost:3333/users/1), request.params
// Query Params: Paginação, filtros, ordenação - (localhost:3333/users?page=1), request.query

app.listen(3333);
