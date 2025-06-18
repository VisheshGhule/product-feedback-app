const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4200;

// ✅ Correct path to your Angular dist folder
const DIST_DIR = path.join(__dirname, 'dist/product-feedback-app/browser');

// ✅ Serve static files
app.use(express.static(DIST_DIR));

// ✅ Serve index.html for any route (important for Angular routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
