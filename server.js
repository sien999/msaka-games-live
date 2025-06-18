const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩 New Contact Message:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.send('<p style="color:green;">Thank you for your message!</p>');
});
