const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/generate-link', (req, res) => {
    const { upiId, note } = req.body;
    const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&tn=${encodeURIComponent(note)}`;
    res.json({ link: upiLink });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
