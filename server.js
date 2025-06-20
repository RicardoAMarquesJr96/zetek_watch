const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/executar', (req, res) => {
  console.log('Executando script index.js...');
  exec('node index.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar: ${stderr}`);
      return res.status(500).send('Erro ao executar o script.');
    }
    console.log(`Saída: ${stdout}`);
    res.send('Script executado com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});