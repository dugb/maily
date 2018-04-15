const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hello: 'world' });
});
app.get('/sup', (req, res) => {
	res.send({ wassup: 'world' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
