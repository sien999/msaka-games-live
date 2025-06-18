const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse POST data (needed for contact form)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'msaka-server', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'msaka-server', 'public', 'index.html'));
});

// Contact form submission route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩 New Contact Message:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.send('<p style="color:green;">Thank you for your message!</p>');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
