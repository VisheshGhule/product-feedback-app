const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4200;

// ✅ FIXED PATH — copy goes to /app/browser
const DIST_DIR = path.join(__dirname, 'browser');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
