const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4200;

// ✅ Correct path based on Docker image structure
const DIST_DIR = path.join(__dirname, 'dist/product-feedback-app/browser');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
