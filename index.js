const express = require('express');
const bodyParser = require('body-parser');

const talksRouter = require('./routes/talks');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger);

app.use('/api/v1/talks', talksRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
