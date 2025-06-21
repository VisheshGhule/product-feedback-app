const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4200;

const DIST_DIR = path.resolve(__dirname, 'dist/product-feedback-app/browser');

app.use(express.static(DIST_DIR));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
