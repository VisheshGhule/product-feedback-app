const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4200;

// Serve static files
const DIST_DIR = path.join(__dirname, 'dist/product-feedback-app/browser');
app.use(express.static(DIST_DIR));

// Redirect all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
