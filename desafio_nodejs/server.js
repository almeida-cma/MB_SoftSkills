const express = require('express');
const app = express();
const path = require('path');

// Servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para a página de login (com o erro)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/login.htm'));
});

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
