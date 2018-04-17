const express = require('express');

const app = express();

app.use('/', express.static('./build', {
  maxAge: '14 days',
}));

app.get('*', (req, res) => {
  res.set('cache-control', 'max-age=0,no-cache,no-store,must-revalidate');
  res.sendFile(`./build/index.html`);
});


app.listen(5000);