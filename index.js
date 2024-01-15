import { retornaHistorico, retornaId, retornaPorAno, authYear, authYearNotFound } from "./servicos/servicos.js";
import historicoInflacao from "./dados/dados.js";
import express from "express";
const app = express();
const porta = 8000;

app.get("/historicoIpca", (req, res) => {
  let ano = parseInt(req.query.ano);
  let anoRetornado = retornaPorAno(historicoInflacao, ano);
  let retornaTudo = retornaHistorico(historicoInflacao);

  if (authYear(ano) && authYearNotFound(ano)) {
    res.json(anoRetornado);
  } else if (!ano) {
    res.json(retornaTudo);
  } else {
    res.json({ Erro: "Não possuimos dados do ano que você está buscando!" });
  }
});

app.get("/historicoIpca/:id", (req, res) => {
  let id = req.params.id;
  let idRetornado = retornaId(historicoInflacao, id);

  res.json(idRetornado);
});

app.get("/historicoIpca/calculo", (req, res) => {
  let valor = parseInt(req.query.valor);
  let mesInicial = parseInt(req.query.mesInicial);
  let anoInicial = parseInt(req.query.anoInicial);
  let mesFinal = parseInt(req.query.mesFinal);
  let anoFinal = parseInt(req.query.mesInicial);
});

app.listen(porta, () => {
  let data = new Date();
  console.log("servidor iniciado em " + data);
});
