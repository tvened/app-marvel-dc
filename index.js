const express = require('express');
const app = express();
const PORT = 3000;

// 1. Página inicial - Rota /
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Catálogo de Heróis</title>
    </head>
    <body>
      <h1>Catálogo de Heróis</h1>
      <p>Bem-vindo ao catálogo de heróis dos universos Marvel e DC!</p>
      
      <h3>Universos:</h3>
      <ul>
        <li><a href="/marvel">Universo Marvel</a></li>
        <li><a href="/dc">Universo DC</a></li>
      </ul>

      <hr>

      <h3>Personagens em Destaque:</h3>
      <ul>
        <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
        <li><a href="/personagem/marvel/Homem de Ferro">Homem de Ferro (Marvel)</a></li>
        <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
        <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
      </ul>
    </body>
    </html>
  `);
});

// 2. Rota da Marvel
app.get('/marvel', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Universo Marvel</title>
    </head>
    <body>
      <h1>Marvel Comics</h1>
      <p>A Marvel Comics é uma das maiores editoras de banda desenhada do mundo, lar dos Vingadores, X-Men e Homem-Aranha.</p>
      
      <h3>Personagens:</h3>
      <ul>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Homem de Ferro">Homem de Ferro</a></li>
        <li><a href="/personagem/marvel/Capitao America">Capitão América</a></li>
      </ul>

      <p><a href="/">← Voltar à Página Inicial</a></p>
    </body>
    </html>
  `);
});

// 2. Rota da DC
app.get('/dc', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Universo DC</title>
    </head>
    <body>
      <h1>DC Comics</h1>
      <p>A DC Comics é uma das mais tradicionais editoras americanas, criadora da Liga da Justiça, Batman, Superman e Mulher-Maravilha.</p>
      
      <h3>Personagens:</h3>
      <ul>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
        <li><a href="/personagem/dc/Flash">Flash</a></li>
      </ul>

      <p><a href="/">← Voltar à Página Inicial</a></p>
    </body>
    </html>
  `);
});

// 3. Rota com dois parâmetros 
app.get('/personagem/:empresa/:nome', (req, res) => {
  const { empresa, nome } = req.params;

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Detalhes do Personagem</title>
    </head>
    <body>
      <h1>Detalhes do Herói</h1>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Editora / Empresa:</strong> ${empresa.toUpperCase()}</p>
      
      <hr>
      <p><a href="/${empresa.toLowerCase()}">← Voltar para ${empresa.toUpperCase()}</a></p>
      <p><a href="/">← Voltar à Página Inicial</a></p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor a executar em http://localhost:${PORT}`);
});