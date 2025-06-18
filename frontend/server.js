const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4200;
const DIST_DIR = path.join(__dirname, 'dist/product-feedback-app/browser');

app.use(express.static(DIST_DIR));
app.get('*', (_, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
