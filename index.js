const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Remove the duplicate listen function

app.get('/', (req, res) => {
  res.send('Hello from CI/CD pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
