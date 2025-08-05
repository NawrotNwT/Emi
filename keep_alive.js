const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🌸 Emi czuwa i jest online!');
});

function keepAlive() {
  app.listen(3000, () => {
    console.log('✅ Webserver aktywny na porcie 3000');
  });
}

module.exports = keepAlive;